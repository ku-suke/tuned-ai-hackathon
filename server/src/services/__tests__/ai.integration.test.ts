import { describe, it, expect, beforeAll, vi } from 'vitest'
import { AIService } from '../ai'
import { ProjectStep } from '../../types/firestore'

// 環境変数のモック
vi.mock('../../config/env', () => ({
  validateEnv: vi.fn().mockReturnValue({
    PORT: 8080,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    PROJECT_ID: 'test-project'
  })
}))

describe('AIService Integration', () => {
  let aiService: AIService
  
  beforeAll(() => {
    aiService = new AIService()
  })

  describe('startChat', () => {
    it('APIを使用して実際にチャットセッションを開始できる', async () => {
      const history = [
        { role: 'user', parts: [{ text: 'こんにちは' }] }
      ]
      const systemInstruction = 'あなたは親切なアシスタントです。'

      // @ts-ignore - プライベートメソッドをテストするため
      const chat = aiService.startChat(history, systemInstruction)
      const response = await chat.sendMessage('調子はどうですか？')
      
      expect(response.response).toBeDefined()
      expect(typeof response.response.text()).toBe('string')
      expect(response.response.text().length).toBeGreaterThan(0)
    }, 10000)
  })

  describe('generateContextResponse', () => {
    it('コンテキストを含めた応答を生成できる', async () => {
      // テストデータの準備
      const step: ProjectStep = {
        id: 'test-step',
        templateStepId: 'template-step',
        order: 1,
        conversations: [
          {
            id: 'conv-1',
            role: 'user',
            content: 'こんにちは',
            createdAt: new Date()
          },
          {
            id: 'conv-2',
            role: 'model',
            content: 'はい、どうぞ',
            createdAt: new Date()
          }
        ],
        documents: [],
        uploadedDocuments: []
      }

      const systemPrompt = 'あなたはマーケティング戦略のエキスパートです。'
      const contextDocs = '参考資料：マーケティング基礎理論について'
      const message = '具体的な戦略を教えてください'
      const templateStep = {
        firstMessageTemplate: 'マーケティング戦略の相談を承ります。'
      }
      const allSteps = [
        {
          stepNumber: 1,
          title: 'マーケティング戦略の立案',
          isCurrentStep: true
        }
      ]
      const previousArtifacts = [
        {
          stepTitle: '事前調査',
          title: '市場分析レポート',
          content: '市場規模は拡大傾向にあります。',
          summary: '市場は成長中'
        }
      ]

      // モックのレスポンスオブジェクト
      const mockResponse = {
        write: vi.fn()
      }

      const result = await aiService.generateContextResponse(
        step,
        systemPrompt,
        contextDocs,
        message,
        templateStep,
        allSteps,
        previousArtifacts,
        mockResponse
      )

      expect(result).toBe(true)
      expect(mockResponse.write).toHaveBeenCalled()
      
      // writeに渡されたデータの検証
      const calls = mockResponse.write.mock.calls
      expect(calls.length).toBeGreaterThan(0)
      
      // 各チャンクが有効なJSONであることを確認
      for (const [call] of calls) {
        const chunk = JSON.parse(call.replace('data: ', ''))
        expect(chunk).toHaveProperty('text')
        expect(typeof chunk.text).toBe('string')
      }
    }, 20000) // タイムアウトを20秒に設定
  })
})