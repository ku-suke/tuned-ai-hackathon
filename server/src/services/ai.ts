import { GoogleGenerativeAI } from '@google/generative-ai';
import { validateEnv } from '../config/env';

export class AIService {
  private model: any;

  constructor() {
    const env = validateEnv();
    const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
    this.model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  }

  async generateChatResponse(messages: string[]): Promise<AsyncGenerator<string>> {
    try {
      const chat = this.model.startChat();
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
}

export const aiService = new AIService();