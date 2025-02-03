import { VertexAI } from '@google-cloud/vertexai';
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
  private vertexAi: VertexAI;

  constructor() {
    const env = validateEnv();
    this.vertexAi = new VertexAI({
      project: env.PROJECT_ID,
      location: 'us-central1'
    });
  }

  private async startChat(history: any[] = [], systemInstruction?: string, mimeType?: string) {
    const model = this.vertexAi.preview.getGenerativeModel({
      model: 'gemini-2.0-flash-exp',
      generationConfig: {
        temperature: 0.7,
        topP: 1,
        topK: 40,
      }
    });

    const chat = model.startChat({
      history: history.map(msg => ({
        role: msg.role,
        parts: msg.parts
      })),
      ...(systemInstruction && { context: systemInstruction })
    });

    return chat;
  }

  private logStructured(log: StructuredLog): void {
    console.log(JSON.stringify(log));
  }

  private getResponseText(response: any): string {
    return response?.candidates?.[0]?.content?.parts?.[0]?.text || '';
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
      const stepsInfo = allSteps
        .map(step => {
          return `Step ${step.stepNumber}: ${step.title}${step.isCurrentStep ? ' (Current Step)' : ''}`;
        })
        .join('\n');

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

      const initialHistory = [{
        role: 'user',
        parts: [{ text: 'よろしくお願いします。' }]
      }, {
        role: 'model',
        parts: [{ text: templateStep.firstMessageTemplate }]
      }];

      initialHistory.push(
        ...step.conversations
          .filter(conv => conv.content && conv.content.trim() !== '')
          .map(conv => ({
            role: conv.role,
            parts: [{ text: conv.content }]
          }))
      );

      const chat = await this.startChat(initialHistory, fullSystemPrompt);
      const result = await chat.sendMessageStream(message);
      
      for await (const chunk of result.stream) {
        const text = chunk.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
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
      const chat = await this.startChat([], assisInstructions);

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
      const response = await result.response;
      const text = this.getResponseText(response);

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
      const history = conversations
      .filter(conv => conv.content && conv.content.trim() !== '')
      .map(conv => ({
        role: conv.role,
        parts: [{ text: conv.content }]
      }))

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
      あなたは、マーケティング事務AIです。以下のフォーマットで成果物を日本語で生成します。
      
      # これまでのステップの概要：
      ${stepsInfo}

      ほかのステップに関する会話は成果物に含めないでください。

      # 本文フォーマット（日本語で出力）：
      ${artifactPrompt}
      `;
      const chat = await this.startChat(history, systemInstruction);
      const prompt = `これまでの会話をまとめてレポートしてください`;

      this.logStructured({
        severity: 'DEBUG',
        message: 'Generating artifact',
        context: { artifactPrompt, conversations, prompt }
      });

      const result = await chat.sendMessage(prompt);
      const response = await result.response;
      const text = this.getResponseText(response);

      this.logStructured({
        severity: 'DEBUG',
        message: 'Received AI response',
        context: { aiResponse: text }
      });

      const summaryPrompt = `
      この成果物の要約とタイトルを生成してください。
      -----
      ${text}
      -----
      生成するフォーマット：
      {
        "title": "成果物のタイトル",
        "summary": "成果物の要約（100文字程度）"
      }`;

      this.logStructured({
        severity: 'DEBUG',
        message: 'Generating summary and title',
        context: { summaryPrompt }
      });
      const summaryChat = await this.startChat([], '');
      const summaryResult = await summaryChat.sendMessage(summaryPrompt);
      const summaryResponse = await summaryResult.response;
      const summaryText = this.getResponseText(summaryResponse);

      this.logStructured({
        severity: 'DEBUG',
        message: 'Received AI response',
        context: { aiResponse: summaryText }
      });

      const jsonMatch = summaryText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('JSON not found in response');
      }

      const artifact = JSON.parse(jsonMatch[0]);
      return {
        title: artifact.title || '無題',
        content: text || '',
        summary: artifact.summary || '',
        charCount: text?.length || 0
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