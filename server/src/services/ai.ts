import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, GenerativeModel, ChatSession } from '@google/generative-ai';
import { validateEnv } from '../config/env';

interface Response {
  write(data: string): void;
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
    this.model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  }

  private startChat(history: any[] = []): ChatSession {
    return this.model.startChat({
      history,
      safetySettings: this.safetySettings,
    });
  }

  async generateChatResponse(messages: string[]): Promise<AsyncGenerator<string>> {
    try {
      const chat = this.startChat();
      const result = await chat.sendMessageStream(messages[messages.length - 1]);
      
      const generator = async function* () {
        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) {
            yield text;
          }
        }
      };

      return generator();
    } catch (error) {
      console.error('AI generation error:', error);
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

      const chat = this.startChat();
      const result = await chat.sendMessageStream(fullPrompt);

      for await (const chunk of result.stream) {
        const text = chunk.text();
        res.write(`data: ${JSON.stringify({ text })}\n\n`);
      }

      return true;
    } catch (error) {
      console.error('Error in generateContextResponse:', error);
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

      const result = await chat.sendMessage(prompt);
      const text = result.response.text();

      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('JSON not found in response');
      }

      const parsed = JSON.parse(jsonMatch[0]);
      if (!parsed.exampleTalkResponse || !Array.isArray(parsed.exampleTalkResponse)) {
        throw new Error('Invalid response format');
      }

      return parsed.exampleTalkResponse;
    } catch (error) {
      console.error('Error in generateExampleResponses:', error);
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
}
`;

      const result = await chat.sendMessage(prompt);
      const text = result.response.text();

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
    } catch (error) {
      console.error('Error in generateArtifact:', error);
      return null;
    }
  }
}

export const aiService = new AIService();