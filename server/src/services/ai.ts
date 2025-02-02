import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, GenerativeModel, ChatSession, SchemaType } from '@google/generative-ai';
import { validateEnv } from '../config/env';
import { ProjectStep, ProjectTemplateStep } from '../types/firestore';

interface Response {
  write(data: string): void;
}

interface StructuredLog {
  severity: 'ERROR' | 'INFO' | 'DEBUG';
  message: string;
  error?: {
    name?: string;
    message?: string;
    stack?: string;
  };
  context?: Record<string, unknown>;
}

export class AIService {
  private genAI: GoogleGenerativeAI;
  private readonly safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  constructor() {
    const env = validateEnv();
    this.genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
  }

  private startChat(history: any[] = [], systemInstruction?: string, mimeType?: string): ChatSession {
    const model = this.genAI.getGenerativeModel({
      model: 'gemini-2.0-flash-exp',
      systemInstruction: systemInstruction
    });
    model.generationConfig.responseMimeType = mimeType || 'text/plain';
    return model.startChat({
      history,
      safetySettings: this.safetySettings,
      
    });
  }

  private logStructured(log: StructuredLog): void {
    console.log(JSON.stringify(log));
  }

  async generateContextResponse(
    step: ProjectStep,
    systemPrompt: string,
    contextDocs: string,
    message: string,
    templateStep: {
      firstMessageTemplate: string;
    },
    allSteps: Array<{
      stepNumber: number;
      title: string;
      isCurrentStep: boolean;
      artifact?: {
        title: string;
        content: string;
        summary: string;
      };
    }>,
    previousArtifacts: Array<{
      stepTitle: string;
      title: string;
      content: string;
      summary: string;
    }>,
    res: Response
  ) {
    try {
      // 全ステップ情報の構築
      const stepsInfo = allSteps
        .map(step => {
          return `Step ${step.stepNumber}: ${step.title}${step.isCurrentStep ? ' (Current Step)' : ''}`;
        })
        .join('\n');

      // 前のステップの成果物の追加
      const artifactsInfo = previousArtifacts
        .map(artifact => {
          return `
Step: ${artifact.stepTitle}
Title: ${artifact.title}
Summary: ${artifact.summary}`;
        })
        .join('\n\n');

      const fullSystemPrompt = `
System: ${systemPrompt}

* Keep your responses concise and to the point.

Project Steps Overview:
${stepsInfo}

* You are limited to answering questions about the current step only. Please guide users to move to the appropriate step for questions about other steps.

Previous Steps Artifacts:
${artifactsInfo}

Reference Documents:
${contextDocs}

Language: Japanese`;

      this.logStructured({
        severity: 'DEBUG',
        message: 'Generating context response',
        context: {
          systemPrompt,
          stepsInfo,
          artifactsInfo,
          contextDocs,
          userMessage: message
        }
      });

      // firstMessageTemplateをhistoryに追加
      const initialHistory = [{
        role: 'user',
        parts: [{ text: 'よろしくお願いします。' }]
      }, {
        role: 'model',
        parts: [{ text: templateStep.firstMessageTemplate }]
      }];
      // このステップにおけるこれまでの会話をinitialHistoryに追加
      initialHistory.push(
        ...step.conversations
          .filter(conv => conv.content && conv.content.trim() !== '')
          .map(conv => ({
            role: conv.role,
            parts: [{ text: conv.content }]
          }))
      );

      const chat = this.startChat(initialHistory, fullSystemPrompt);
      const result = await chat.sendMessageStream(message);

      for await (const chunk of result.stream) {
        const text = chunk.text();
        res.write(`data: ${JSON.stringify({ text })}\n\n`);
      }

      return true;
    } catch (error: any) {
      this.logStructured({
        severity: 'ERROR',
        message: 'Context response generation failed',
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack
        },
        context: { systemPrompt, message }
      });
      return false;
    }
  }

  async generateExampleResponses(
    systemPrompt: string,
    recentConversations: string
  ): Promise<string[] | null> {

    const assisInstructions = `
    あなたは、ロールプレイングAIです。これから、専門家AIとユーザの会話文を渡しますので、ユーザーの立場をロールプレイして回答例を3つ生成してください。`;
    try {
      const chat = this.startChat([], assisInstructions, 'application/json');

      const prompt = `
専門家AIの定義: ${systemPrompt}

ここまでの会話：
${recentConversations}

Output your response in the following JSON format:
{
  "exampleTalkResponse": [
    "短い１５文字前後の回答例1",
    "短い１５文字前後の回答例2",
    "短い１５文字前後の回答例3"
  ]
}`;

      this.logStructured({
        severity: 'DEBUG',
        message: 'Generating example responses',
        context: { systemPrompt, recentConversations, prompt }
      });

      const result = await chat.sendMessage(prompt);
      const text = result.response.text();

      this.logStructured({
        severity: 'DEBUG',
        message: 'Received AI response',
        context: { aiResponse: text }
      });

      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('JSON not found in response');
      }

      const parsed = JSON.parse(jsonMatch[0]);
      if (!parsed.exampleTalkResponse || !Array.isArray(parsed.exampleTalkResponse)) {
        throw new Error('Invalid response format');
      }

      return parsed.exampleTalkResponse;
    } catch (error: any) {
      this.logStructured({
        severity: 'ERROR',
        message: 'Example response generation failed',
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack
        },
        context: { systemPrompt, recentConversations }
      });
      return null;
    }
  }

  async generateArtifact(
    artifactPrompt: string,
    currentStep: ProjectStep,
    templateSteps: Array<ProjectTemplateStep>
  ) {
    try {
      const conversations = currentStep.conversations;
      const history = conversations.map(conv => ({
        role: conv.role === 'user' ? 'user' : 'model',
        parts: [{ text: conv.content }],
      }));

      // すべてのテンプレートステップのタイトルを取得、ただし、現在のステップは除く
      const allSteps = templateSteps.map((step, index) => {
        return {
          stepNumber: index + 1,
          title: step.title,
          isCurrentStep: step.id === currentStep.templateStepId
        };
      });
      const stepsInfo = allSteps
        .map(step => {
          return `Step ${step.stepNumber}: ${step.title}${step.isCurrentStep ? ' (Current Step)' : ''}`;
        })
        .join('\n');
      

      const systemInstruction = `
      # System Instruction
      あなたは、マーケティング事務AIです。以下の形式のJSONでこのステップの成果物を日本語で生成してください：
      {
        "title": "成果物のタイトル",
        "content": "成果物の本文（詳細な内容）",
        "summary": "成果物の要約（100文字程度）"
      }
      ※ JSONは必ず1件のみです。複数の情報を返したい場合はcontentの中に複数の情報を含めてください。
      
      # これまでのステップの概要：
      ${stepsInfo}

      ほかのステップに関する会話は成果物に含めないでください。

      # 本文フォーマット（日本語で出力）：
      ${artifactPrompt}

      ※ JSONは必ず1件のみです。複数の情報を返したい場合はcontentの中に複数の情報を含めてください。配列を使わないこと。
      `;
      const chat = this.startChat(history, systemInstruction, 'application/json');
      const prompt = `これまでの会話をまとめてレポートしてください`;

      this.logStructured({
        severity: 'DEBUG',
        message: 'Generating artifact',
        context: { artifactPrompt, conversations, prompt }
      });

      const result = await chat.sendMessage(prompt);
      const text = result.response.text();

      this.logStructured({
        severity: 'DEBUG',
        message: 'Received AI response',
        context: { aiResponse: text }
      });

      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('JSON not found in response');
      }

      const artifact = JSON.parse(jsonMatch[0]);
      return {
        title: artifact.title || '無題',
        content: artifact.content || '',
        summary: artifact.summary || '',
        charCount: artifact.content?.length || 0
      };
    } catch (error: any) {
      this.logStructured({
        severity: 'ERROR',
        message: 'Artifact generation failed',
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack
        },
        context: { artifactPrompt }
      });
      return null;
    }
  }
}

export const aiService = new AIService();