import { describe, it, expect, vi, beforeEach } from 'vitest'
import { AIService } from '../ai'
import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai'

// GoogleGenerativeAIのモック
vi.mock('@google/generative-ai', () => {
  const mockChatSession = {
    sendMessage: vi.fn(),
    sendMessageStream: vi.fn()
  }
  
  const mockModel = {
    startChat: vi.fn().mockReturnValue(mockChatSession),
    generationConfig: {}
  }

  const getGenerativeModel = vi.fn().mockReturnValue(mockModel)

  return {
    GoogleGenerativeAI: vi.fn(() => ({
      getGenerativeModel
    })),
    HarmCategory: {
      HARM_CATEGORY_HARASSMENT: 'HARM_CATEGORY_HARASSMENT',
      HARM_CATEGORY_HATE_SPEECH: 'HARM_CATEGORY_HATE_SPEECH',
      HARM_CATEGORY_SEXUALLY_EXPLICIT: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
      HARM_CATEGORY_DANGEROUS_CONTENT: 'HARM_CATEGORY_DANGEROUS_CONTENT'
    },
    HarmBlockThreshold: {
      BLOCK_MEDIUM_AND_ABOVE: 'BLOCK_MEDIUM_AND_ABOVE'
    }
  }
})

// 環境変数のモック
vi.mock('../../config/env', () => ({
  validateEnv: vi.fn().mockReturnValue({
    GEMINI_API_KEY: 'test-api-key'
  })
}))

describe('AIService', () => {
  let aiService: AIService
  let mockGenAI: any
  
  beforeEach(() => {
    // モックをリセット
    vi.clearAllMocks()
    
    // テストごとにインスタンスを新規作成
    aiService = new AIService()
    mockGenAI = new (GoogleGenerativeAI as any)('test-api-key')
  })

  describe('startChat', () => {
    it('正しいパラメータでチャットセッションを開始する', () => {
      const history = [
        { role: 'user', parts: [{ text: 'テストメッセージ' }] }
      ]
      const systemInstruction = 'システム指示'
      const mimeType = 'text/plain'

      // @ts-ignore - プライベートメソッドをテストするため
      const chat = aiService.startChat(history, systemInstruction, mimeType)

      // GoogleGenerativeAIのインスタンス化を確認
      expect(GoogleGenerativeAI).toHaveBeenCalledWith('test-api-key')

      // getGenerativeModelの呼び出しを確認
      expect(mockGenAI.getGenerativeModel).toHaveBeenCalledWith({
        model: 'gemini-2.0-flash-exp',
        systemInstruction
      })

      // モデルのstartChatの呼び出しを確認
      const model = mockGenAI.getGenerativeModel()
      expect(model.startChat).toHaveBeenCalledWith({
        history,
        safetySettings: expect.arrayContaining([
          expect.objectContaining({
            category: expect.any(String),
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          })
        ])
      })

      // レスポンスMIMEタイプの設定を確認
      expect(model.generationConfig.responseMimeType).toBe(mimeType)
    })

    it('デフォルトパラメータでチャットセッションを開始する', () => {
      // @ts-ignore - プライベートメソッドをテストするため
      const chat = aiService.startChat()

      const model = mockGenAI.getGenerativeModel()
      
      // 空の履歴でstartChatが呼ばれることを確認
      expect(model.startChat).toHaveBeenCalledWith({
        history: [],
        safetySettings: expect.any(Array)
      })

      // デフォルトのMIMEタイプが設定されることを確認
      expect(model.generationConfig.responseMimeType).toBe('text/plain')
    })
  })
})