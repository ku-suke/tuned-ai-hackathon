import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, GenerativeModel, ChatSession, SchemaType } from '@google/generative-ai';
import { validateEnv } from '../config/env';

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
  private readonly model: GenerativeModel;
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
    const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
    this.model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });
  }

  private startChat(history: any[] = []): ChatSession {
    return this.model.startChat({
      history,
      safetySettings: this.safetySettings,
    });
  }

  private logStructured(log: StructuredLog): void {
    console.log(JSON.stringify(log));
  }

  async generateChatResponse(messages: string[]): Promise<AsyncGenerator<string>> {
    try {
      const chat = this.startChat();
      const message = messages[messages.length - 1];

      this.logStructured({
        severity: 'DEBUG',
        message: 'Generating chat response',
        context: { prompt: message }
      });

      const result = await chat.sendMessageStream(message);
      
      const generator = async function* () {
        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) {
            yield text;
          }
        }
      };

      return generator();
    } catch (error: any) {
      this.logStructured({
        severity: 'ERROR',
        message: 'Chat generation failed',
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack
        },
        context: { messages }
      });
      throw error;
    }
  }

  async generateContextResponse(systemPrompt: string, contextDocs: string, message: string, res: Response) {
    try {
      const fullPrompt = `
System: ${systemPrompt}

Reference Documents:
${contextDocs}

User Question: ${message}`;

      this.logStructured({
        severity: 'DEBUG',
        message: 'Generating context response',
        context: { systemPrompt, contextDocs, userMessage: message }
      });

      const chat = this.startChat();
      const result = await chat.sendMessageStream(fullPrompt);

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
    try {
      const chat = this.startChat();

      const prompt = `
System: あなたは会話の文脈を理解して適切な選択肢を提示するAIアシスタントです。
以下の情報を元に、ユーザーが選択できる適切な回答例を3つ生成してください。
ユーザーは、別の専門家AIからヒアリングを受けています。
回答例は、会話の文脈に沿った自然な表現を心がけてください。

Recent Conversations:
専門家AIの定義: ${systemPrompt}
${recentConversations}

Based on the above context, generate 3 appropriate response options that:
1. Follow the user choice prompt template
2. Consider the context of recent conversations
3. Are natural and conversational
4. Help move the conversation forward

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

      this.model.generationConfig = {
        responseMimeType: 'application/json'
      };

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
    conversations: Array<{ role: string; content: string }>
  ) {
    try {
      const history = conversations.map(conv => ({
        role: conv.role === 'user' ? 'user' : 'model',
        parts: [{ text: conv.content }],
      }));

      const chat = this.startChat(history);
      const prompt = `
System: ${artifactPrompt}
以下の形式のJSONで成果物を生成してください：

{
  "title": "成果物のタイトル",
  "content": "成果物の本文（詳細な内容）",
  "summary": "成果物の要約（100文字程度）"
}`;

      this.logStructured({
        severity: 'DEBUG',
        message: 'Generating artifact',
        context: { artifactPrompt, conversations, prompt }
      });

      this.model.generationConfig = {
        responseMimeType: 'application/json',
      };

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