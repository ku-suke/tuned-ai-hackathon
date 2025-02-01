import { ref } from 'vue'
import { auth, db } from '@/main'
import { doc, getDoc, updateDoc, arrayUnion, collection, getDocs, orderBy, query } from 'firebase/firestore'
import type {
  Project,
  ProjectStep,
  ProjectTemplateStep,
  ReferenceDocument,
  ProjectTemplate,
  PublishedProjectTemplate,
  Conversation
} from '@/types/firestore'

const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL || 'http://localhost:8080'

const API_ENDPOINTS = {
  chatWithContext: `${BASE_URL}/api/chat/stream`,
  generateExampleResponse: `${BASE_URL}/api/chat/example`,
  generateArtifact: `${BASE_URL}/api/chat/artifact`
}

type ProjectTemplateWithSteps = ProjectTemplate & { steps: ProjectTemplateStep[] }
type PublishedProjectTemplateWithSteps = PublishedProjectTemplate & { steps: ProjectTemplateStep[] }

export function useProjectDetail() {
  const loading = ref(true)
  const project = ref<Project | null>(null)
  const projectSteps = ref<ProjectStep[]>([])
  const currentStep = ref<ProjectStep | null>(null)
  const template = ref<ProjectTemplateWithSteps | PublishedProjectTemplateWithSteps | null>(null)
  const isGenerating = ref(false)

  // AIストリームレスポンスの処理
  const processAIStream = async (response: Response, updateMessage: (content: string) => void) => {
    if (!response.body) throw new Error('No response body')
    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''
    let finalMessage = ''

    while (true) {
      const { value, done } = await reader.read()
      if (done) break

      const chunk = decoder.decode(value)
      buffer += chunk

      // SSEメッセージの処理
      const lines = buffer.split('\n')
      buffer = lines.pop() || ''
    
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6))
            if (data.type === 'message' && data.content) {
              finalMessage += data.content
              updateMessage(finalMessage)
            } else if (data.type === 'error') {
              console.error('Stream error:', data.error)
              throw new Error(data.error)
            }
          } catch (e) {
            console.error('JSON parse error:', e)
          }
        }
      }
    }

    return finalMessage
  }

  // AIメッセージの更新
  const updateAIMessage = async (messageId: string, content: string): Promise<void> => {
    if (!project.value || !currentStep.value) return

    // ローカルステートの更新
    const messageIndex = currentStep.value.conversations.findIndex(m => m.id === messageId)
    if (messageIndex !== -1) {
      currentStep.value.conversations[messageIndex].content = content
    }

    // Firestoreの更新
    try {
      const stepRef = doc(db, `users/${auth.currentUser?.uid}/projects/${project.value.id}/steps`, currentStep.value.id)
      
      // 更新された会話配列全体を保存
      await updateDoc(stepRef, {
        conversations: currentStep.value.conversations
      })
    } catch (error) {
      console.error('メッセージ更新エラー:', error)
    }
  }

  // チャットAPIの呼び出し
  const callChatAPI = async (userMessage: string): Promise<Response | null> => {
    if (!project.value || !currentStep.value) return null

    // URLSearchParamsを使用してクエリパラメータを構築
    const params = new URLSearchParams({
      messageId: crypto.randomUUID(),
      message: userMessage
    })

    const response = await fetch(`${API_ENDPOINTS.chatWithContext}?${params}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${await auth.currentUser?.getIdToken()}`
      }
    })

    if (!response.ok) throw new Error('Chat API error')
    return response
  }

  // 回答例生成APIの呼び出し
  const callExampleResponseAPI = async (): Promise<Response | null> => {
    if (!project.value || !currentStep.value) return null

    const params = new URLSearchParams({
      projectId: project.value.id,
      stepId: currentStep.value.id
    })

    const response = await fetch(`${API_ENDPOINTS.generateExampleResponse}?${params}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${await auth.currentUser?.getIdToken()}`
      }
    })

    if (!response.ok) throw new Error('Example Response API error')
    return response
  }

  // プロジェクトの取得
  const fetchProject = async (projectId: string) => {
    try {
      const projectDoc = await getDoc(doc(db, `users/${auth.currentUser?.uid}/projects`, projectId))
      if (!projectDoc.exists()) {
        console.error('プロジェクトが見つかりません')
        return
      }

      const data = projectDoc.data()
      project.value = {
        ...data,
        id: projectDoc.id,
        createdAt: data.createdAt?.toDate(),
        updatedAt: data.updatedAt?.toDate(),
      } as Project

      // ステップの取得
      const stepsQuery = query(
        collection(db, `users/${auth.currentUser?.uid}/projects/${projectDoc.id}/steps`),
        orderBy('order')
      )
      const stepsSnapshot = await getDocs(stepsQuery)
      projectSteps.value = stepsSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      })) as ProjectStep[]

      // テンプレートの取得
      const templateDoc = await getDoc(doc(db,
        project.value.templateType === 'private'
          ? `users/${project.value.userId}/projectTemplates/${project.value.templateId}`
          : `publishedTemplates/${project.value.templateId}`
      ))

      if (templateDoc.exists()) {
        const templateData = templateDoc.data()
        if (templateData) {
          const baseTemplate = {
            ...templateData,
            id: templateDoc.id,
            title: templateData.title,
            description: templateData.description,
            steps: templateData.steps || [],
          }

          if (project.value?.templateType === 'private') {
            template.value = {
              ...baseTemplate,
              createdAt: templateData.createdAt?.toDate() || new Date(),
              updatedAt: templateData.updatedAt?.toDate() || new Date(),
              isPublished: templateData.isPublished || false,
              publishedTemplateId: templateData.publishedTemplateId,
            } as ProjectTemplateWithSteps
          } else {
            template.value = {
              ...baseTemplate,
              originalTemplateId: templateData.originalTemplateId,
              userId: templateData.userId,
              authorName: templateData.authorName,
              publishedAt: templateData.publishedAt?.toDate() || new Date(),
              updatedAt: templateData.updatedAt?.toDate() || new Date(),
              categories: templateData.categories || [],
              usageCount: templateData.usageCount || 0,
            } as PublishedProjectTemplateWithSteps
          }
        }
      }

      // 最初のステップを選択
      if (projectSteps.value.length > 0) {
        currentStep.value = projectSteps.value[0]
      }

    } catch (error) {
      console.error('プロジェクト取得エラー:', error)
    } finally {
      loading.value = false
    }
  }

  // ステップ選択
  const handleSelectStep = (step: ProjectStep) => {
    // stepStateの初期化確認
    if (!step.stepState) {
      step.stepState = { generatedChoices: [] };
    }
    currentStep.value = step;
  }

  // メッセージ送信
  const handleSendMessage = async (content: string) => {
    if (!content.trim() || !project.value || !currentStep.value || isGenerating.value) return

    isGenerating.value = true
    const message: Conversation = {
      id: crypto.randomUUID(),
      role: 'user',
      content: content.trim(),
      createdAt: new Date()
    }
    currentStep.value.stepState = { generatedChoices: [] };
    
    if (!currentStep.value.conversations) {
      currentStep.value.conversations = [];
    }

    try {
      const stepRef = doc(db, `users/${auth.currentUser?.uid}/projects/${project.value.id}/steps`, currentStep.value.id)
      
      // ユーザーメッセージを追記
      await updateDoc(stepRef, {
        conversations: arrayUnion(message)
      })
      currentStep.value.conversations.push(message)

      // AIメッセージを作成
      const aiMessage: Conversation = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: '',
        createdAt: new Date()
      }

      // AIメッセージを保存
      await updateDoc(stepRef, {
        conversations: arrayUnion(aiMessage)
      })
      currentStep.value.conversations.push(aiMessage)

      // APIレスポンスを処理
      const response = await callChatAPI(content)
      if (response) {
        await processAIStream(response,
          (content) => updateAIMessage(aiMessage.id, content))
      }

    } catch (error) {
      console.error('メッセージ送信エラー:', error)
      // エラーメッセージを表示
      if (currentStep.value?.conversations.length) {
        const lastMessage = currentStep.value.conversations[currentStep.value.conversations.length - 1]
        if (lastMessage.role === 'assistant') {
          await updateAIMessage(lastMessage.id, 'エラーが発生しました。もう一度お試しください。')
        }
      }
    } finally {
      isGenerating.value = false
    }

    // 会話が5件以上になった場合、成果物を生成
    if (currentStep.value.conversations.length >= 5) {
      try {
        const params = new URLSearchParams({
          projectId: project.value.id,
          stepId: currentStep.value.id
        })

        const response = await fetch(`${API_ENDPOINTS.generateArtifact}?${params}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${await auth.currentUser?.getIdToken()}`
          }
        });

        if (!response.ok) {
          throw new Error('成果物生成に失敗しました');
        }
      } catch (error) {
        console.error('成果物生成エラー:', error);
      }
    }

    try {
      // 回答が返ってきた後に例示レスポンスを生成
      const exampleResponse = await callExampleResponseAPI()
      if (exampleResponse) {
        const examples = await exampleResponse.json()
        if (Array.isArray(examples)) {
          // ステップの状態を更新
          const stepRef = doc(db, `users/${auth.currentUser?.uid}/projects/${project.value.id}/steps`, currentStep.value.id)

          await updateDoc(stepRef, {
            stepState: {
              ...currentStep.value.stepState,
              generatedChoices: examples
            }
          })

          // ローカルステートも更新
          currentStep.value.stepState.generatedChoices = examples
        }
      }
    } catch (error) {
      console.error('回答例生成エラー:', error)
    }
  }

  // テンプレートのステップ情報を取得
  const getTemplateStep = (step: ProjectStep): ProjectTemplateStep | undefined => {
    return template.value?.steps.find((s: ProjectTemplateStep) => s.id === step.templateStepId)
  }

  // テンプレートのドキュメント情報を取得
  const getTemplateDocument = (step: ProjectStep | null, doc: { id: string, isEnabled: boolean }): ReferenceDocument | undefined => {
    if (!step) return undefined
    const templateStep = getTemplateStep(step)
    return templateStep?.referenceDocuments.find(d => d.id === doc.id)
  }

  // ドキュメントの有効/無効を切り替え
  const handleToggleDocument = async (document: { id: string, isEnabled: boolean }) => {
    if (!project.value || !currentStep.value) return

    try {
      const docIndex = currentStep.value.documents.findIndex(d => d.id === document.id)
      if (docIndex === -1) return

      // Firestore更新
      const stepRef = doc(db, `users/${auth.currentUser?.uid}/projects/${project.value.id}/steps`, currentStep.value.id)
      await updateDoc(stepRef, {
        [`documents.${docIndex}.isEnabled`]: !document.isEnabled
      })

      // ローカルステートを更新
      document.isEnabled = !document.isEnabled
    } catch (error) {
      console.error('ドキュメント更新エラー:', error)
    }
  }

  return {
    loading,
    project,
    projectSteps,
    currentStep,
    template,
    isGenerating,
    fetchProject,
    handleSelectStep,
    handleSendMessage,
    getTemplateStep,
    getTemplateDocument,
    handleToggleDocument
  }
}