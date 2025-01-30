<template>
  <div class="project-detail">
    <header class="header">
      <div class="d-flex justify-between align-center">
        <h1>{{ project?.title || 'プロジェクト' }}</h1>
        <button class="btn btn-text" @click="handleBack">ダッシュボードに戻る</button>
      </div>
    </header>

    <div v-if="loading" class="loading">
      読み込み中...
    </div>

    <div v-else-if="!project" class="no-data">
      プロジェクトが見つかりません
    </div>

    <div v-else class="main-content">
      <!-- 左カラム: ステップ一覧 -->
      <div class="steps-column">
        <h2 class="column-title">ステップ</h2>
        <div class="steps-list">
          <div 
            v-for="step in project.steps" 
            :key="step.id"
            class="step-item"
            :class="{
              'completed': step.artifact,
              'active': currentStep?.id === step.id
            }"
            @click="handleSelectStep(step)"
          >
            <div class="step-header">
              <span class="step-number">{{ step.order }}</span>
              <h3>{{ getTemplateStep(step)?.title }}</h3>
            </div>
            <div class="step-summary">
              <span class="artifact-icon">
                {{ step.artifact ? '📄' : step.conversations.length > 0 ? '📝' : '🔄' }}
              </span>
              <span class="summary-text">
                {{ step.artifact ? step.artifact.title : step.conversations.length > 0 ? '進行中...' : '未着手' }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 中央カラム: チャット -->
      <div class="chat-column">
        <div class="chat-container" v-if="currentStep">
          <div class="chat-messages" ref="chatMessagesRef">
            <div class="message system">
              {{ getTemplateStep(currentStep)?.systemPrompt }}
            </div>
            <template v-if="currentStep.conversations.length > 0">
              <div 
                v-for="message in currentStep.conversations" 
                :key="message.id"
                class="message"
                :class="message.role"
              >
                {{ message.content }}
              </div>
            </template>
            <div v-else class="message system">
              {{ getTemplateStep(currentStep)?.userChoicePrompts?.length ? '以下から選択して会話を開始してください：' : '会話を開始してください' }}
            </div>
          </div>

          <div class="chat-input">
            <div v-if="getTemplateStep(currentStep)?.userChoicePrompts" class="preset-buttons">
              <button 
                v-for="prompt in getTemplateStep(currentStep)?.userChoicePrompts"
                :key="prompt"
                class="preset-button"
                @click="() => handleSendMessage(prompt)"
              >
                {{ prompt }}
              </button>
            </div>
            <div class="input-container">
              <textarea 
                v-model="messageInput"
                placeholder="メッセージを入力..."
                @keydown.enter.prevent="handleSendMessage(messageInput)"
              ></textarea>
              <button 
                class="send-button"
                @click="() => handleSendMessage(messageInput)"
                :disabled="!messageInput.trim()"
              >
                送信
              </button>
            </div>
          </div>
        </div>
        <div v-else class="no-step-selected">
          左のステップリストからステップを選択してください
        </div>
      </div>

      <!-- 右カラム: ドキュメント -->
      <div class="documents-column">
        <div class="documents-section">
          <h2 class="column-title">参照ドキュメント</h2>
          <div class="document-list">
            <div 
              v-for="doc in currentStep?.documents"
              :key="doc.id"
              class="document-item"
            >
              <div class="document-info">
                <span class="document-name">
                  {{ getTemplateDocument(currentStep, doc)?.title }}
                </span>
                <label class="toggle">
                  <input 
                    type="checkbox"
                    :checked="doc.isEnabled"
                    @change="() => handleToggleDocument(doc)"
                  >
                  <span class="slider"></span>
                </label>
              </div>
              <p class="document-summary">
                {{ getTemplateDocument(currentStep, doc)?.content }}
              </p>
            </div>
          </div>
        </div>

        <div class="artifacts-section">
          <h2 class="column-title">生成された成果物</h2>
          <div class="artifact-list">
            <div v-if="currentStep?.artifact" class="artifact-item">
              <h4>{{ currentStep.artifact.title }}</h4>
              <p class="artifact-summary">{{ currentStep.artifact.charCount }}文字</p>
              <button 
                class="view-button"
                @click="currentStep?.artifact && handleShowArtifact(currentStep.artifact)"
              >
                表示
              </button>
            </div>
            <div v-else-if="currentStep" class="no-data">
              まだ成果物は生成されていません
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { auth, db } from '@/main'
import { doc, getDoc, updateDoc, arrayUnion, Timestamp } from 'firebase/firestore'
import type {
  Project,
  ProjectStep,
  ProjectTemplateStep,
  ReferenceDocument,
  ProjectTemplate,
  PublishedProjectTemplate,
  Conversation
} from '@/types/firestore'

const API_ENDPOINTS = {
  chatWithContext: 'https://us-west1-tuned-ai-prod.cloudfunctions.net/chatWithContext',
  generateExampleResponse: 'https://us-west1-tuned-ai-prod.cloudfunctions.net/generateExampleResponse',
  generateArtifact: 'https://us-west1-tuned-ai-prod.cloudfunctions.net/generateArtifact'
}

const route = useRoute()
const router = useRouter()
const loading = ref(true)
const project = ref<Project | null>(null)
const currentStep = ref<ProjectStep | null>(null)
const messageInput = ref('')
const chatMessagesRef = ref<HTMLElement | null>(null)
const template = ref<ProjectTemplate | PublishedProjectTemplate | null>(null) // テンプレートのデータ
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
          if (data.text) {
            finalMessage += data.text
            updateMessage(finalMessage)
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

  const stepIndex = project.value.steps.findIndex(s => s.id === currentStep.value?.id)
  if (stepIndex === -1) return

  // ローカルステートの更新
  const messageIndex = currentStep.value.conversations.findIndex(m => m.id === messageId)
  if (messageIndex !== -1) {
    currentStep.value.conversations[messageIndex].content = content
  }

  // Firestoreの更新
  try {
    const projectRef = doc(db, `users/${auth.currentUser?.uid}/projects`, project.value.id)
    const projectSnap = await getDoc(projectRef)
    
    if (!projectSnap.exists()) {
      throw new Error('Project not found')
    }

    const projectData = projectSnap.data()
    const updatedSteps = [...projectData.steps]
    const updatedConversations = [...updatedSteps[stepIndex].conversations]
    updatedConversations[messageIndex] = {
      ...updatedConversations[messageIndex],
      content
    }

    updatedSteps[stepIndex] = {
      ...updatedSteps[stepIndex],
      conversations: updatedConversations
    }

    await updateDoc(projectRef, {
      steps: updatedSteps,
      updatedAt: Timestamp.now()
    })
  } catch (error) {
    console.error('メッセージ更新エラー:', error)
  }
}

// チャットAPIの呼び出し
const callChatAPI = async (userMessage: string): Promise<Response | null> => {
  if (!project.value || !currentStep.value) return null

  const response = await fetch(API_ENDPOINTS.chatWithContext, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${await auth.currentUser?.getIdToken()}`
    },
    body: JSON.stringify({
      projectId: project.value.id,
      stepId: currentStep.value.id,
      message: userMessage
    })
  })

  if (!response.ok) throw new Error('Chat API error')
  return response
}

// 回答例生成APIの呼び出し
const callExampleResponseAPI = async (selectedPrompt: string): Promise<Response | null> => {
  if (!project.value || !currentStep.value) return null

  const response = await fetch(API_ENDPOINTS.generateExampleResponse, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${await auth.currentUser?.getIdToken()}`
    },
    body: JSON.stringify({
      projectId: project.value.id,
      stepId: currentStep.value.id,
      selectedPrompt
    })
  })

  if (!response.ok) throw new Error('Example Response API error')
  return response
}

// 成果物生成APIの呼び出し
const callArtifactAPI = async (): Promise<Response | null> => {
  if (!project.value || !currentStep.value) return null

  const response = await fetch(API_ENDPOINTS.generateArtifact, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${await auth.currentUser?.getIdToken()}`
    },
    body: JSON.stringify({
      projectId: project.value.id,
      stepId: currentStep.value.id
    })
  })

  if (!response.ok) throw new Error('Artifact API error')
  return response
}

// プロジェクトの取得
const fetchProject = async () => {
  if (!route.params.id) return

  try {
    const projectDoc = await getDoc(doc(db, `users/${auth.currentUser?.uid}/projects`, route.params.id as string))
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

    // テンプレートの取得
    const templateDoc = await getDoc(doc(db, 
      project.value.templateType === 'private' 
        ? `users/${project.value.userId}/projectTemplates/${project.value.templateId}`
        : `publishedTemplates/${project.value.templateId}`
    ))
    
    if (templateDoc.exists()) {
      const templateData = templateDoc.data()
      if (templateData) {
        if (project.value?.templateType === 'private') {
          template.value = {
            ...templateData,
            id: templateDoc.id,
            title: templateData.title,
            description: templateData.description,
            createdAt: templateData.createdAt?.toDate() || new Date(),
            updatedAt: templateData.updatedAt?.toDate() || new Date(),
            isPublished: templateData.isPublished || false,
            publishedTemplateId: templateData.publishedTemplateId,
            steps: templateData.steps || [],
          } as ProjectTemplate
        } else {
          template.value = {
            ...templateData,
            id: templateDoc.id,
            originalTemplateId: templateData.originalTemplateId,
            userId: templateData.userId,
            authorName: templateData.authorName,
            title: templateData.title,
            description: templateData.description,
            publishedAt: templateData.publishedAt?.toDate() || new Date(),
            updatedAt: templateData.updatedAt?.toDate() || new Date(),
            categories: templateData.categories || [],
            steps: templateData.steps || [],
            usageCount: templateData.usageCount || 0,
          } as PublishedProjectTemplate
        }
      }
    }

  } catch (error) {
    console.error('プロジェクト取得エラー:', error)
  } finally {
    loading.value = false
  }
}

// ステップ選択
const handleSelectStep = (step: ProjectStep) => {
  currentStep.value = step
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

  try {
    const stepIndex = project.value.steps.findIndex(s => s.id === currentStep.value?.id)
    if (stepIndex === -1) return

    // プロジェクトの現在の状態を取得
    const projectRef = doc(db, `users/${auth.currentUser?.uid}/projects`, project.value.id)
    const projectSnap = await getDoc(projectRef)
    
    if (!projectSnap.exists()) {
      throw new Error('Project not found')
    }

    const projectData = projectSnap.data()
    const updatedSteps = [...projectData.steps]
    updatedSteps[stepIndex] = {
      ...updatedSteps[stepIndex],
      conversations: [...updatedSteps[stepIndex].conversations, message]
    }

    // ユーザーメッセージを保存
    await updateDoc(projectRef, {
      steps: updatedSteps,
      updatedAt: Timestamp.now()
    })

    currentStep.value.conversations.push(message)
    messageInput.value = ''

    // AIメッセージを作成
    const aiMessage: Conversation = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: '',
      createdAt: new Date()
    }

    // ステップの会話履歴を更新
    updatedSteps[stepIndex] = {
      ...updatedSteps[stepIndex],
      conversations: [...updatedSteps[stepIndex].conversations, aiMessage]
    }

    // AIメッセージを保存
    await updateDoc(projectRef, {
      steps: updatedSteps,
      updatedAt: Timestamp.now()
    })

    currentStep.value.conversations.push(aiMessage)

    // APIレスポンスを処理
    let response
    const templateStep = getTemplateStep(currentStep.value)
    
    /*/*if (templateStep?.artifactGenerationPrompt && currentStep.value.conversations.length > 1) {
      // 成果物生成
      response = await callArtifactAPI()
      if (response) {
        const content = await processAIStream(response,
          (content) => updateAIMessage(aiMessage.id, content))
        
        const summaryMatch = content.match(/---\s*概要\s*---\s*([\s\S]*?)(?=---|\s*$)/)
        const mainContentMatch = content.match(/---\s*本文\s*---\s*([\s\S]*?)(?=---|\s*$)/)
        
        const summary = summaryMatch ? summaryMatch[1].trim() : ''
        const mainContent = mainContentMatch ? mainContentMatch[1].trim() : content

        // 成果物を保存
        await updateDoc(doc(db, `users/${auth.currentUser?.uid}/projects`, project.value.id), {
          [`steps.${stepIndex}.artifact`]: {
            title: templateStep.title,
            content: mainContent,
            summary: summary,
            charCount: mainContent.length,
            createdAt: Timestamp.now()
          },
          updatedAt: Timestamp.now()
        })

        if (currentStep.value) {
          currentStep.value.artifact = {
            title: templateStep.title,
            content: mainContent,
            summary: summary,
            charCount: mainContent.length,
            createdAt: new Date()
          }
        }
      }
    } else*/
     if (templateStep?.userChoicePrompts && !content.includes('回答例：')) {
      // 回答例生成
      response = await callExampleResponseAPI(content)
      if (response) {
        await processAIStream(response,
          (content) => updateAIMessage(aiMessage.id, content))
      }
    } else {
      // 通常のチャット
      response = await callChatAPI(content)
      if (response) {
        await processAIStream(response,
          (content) => updateAIMessage(aiMessage.id, content))
      }
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
    const stepIndex = project.value.steps.findIndex(s => s.id === currentStep.value?.id)
    if (stepIndex === -1) return

    const docIndex = currentStep.value.documents.findIndex(d => d.id === document.id)
    if (docIndex === -1) return

    const projectRef = doc(db, `users/${auth.currentUser?.uid}/projects`, project.value.id)
    const projectSnap = await getDoc(projectRef)
    
    if (!projectSnap.exists()) {
      throw new Error('Project not found')
    }

    const projectData = projectSnap.data()
    const updatedSteps = [...projectData.steps]
    
    // 元のステップの構造を維持しながら、documentsを更新
    updatedSteps[stepIndex] = {
      ...updatedSteps[stepIndex],
      documents: updatedSteps[stepIndex].documents.map((doc: { id: string, isEnabled: boolean }) =>
        doc.id === document.id ? { ...doc, isEnabled: !document.isEnabled } : doc
      )
    }

    await updateDoc(projectRef, {
      steps: updatedSteps,
      updatedAt: Timestamp.now()
    })

    // ローカルステートを更新
    document.isEnabled = !document.isEnabled
  } catch (error) {
    console.error('ドキュメント更新エラー:', error)
  }
}

// 成果物の表示
const handleShowArtifact = (artifact: ProjectStep['artifact']) => {
  if (!artifact) return
  // モーダル表示などの実装
  alert(artifact.content)
}

const handleBack = () => {
  router.push('/dashboard')
}

// チャットを一番下までスクロール
watch(() => currentStep.value?.conversations, async () => {
  await nextTick()
  if (chatMessagesRef.value) {
    chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight
  }
}, { deep: true })

onMounted(fetchProject)
</script>

<style>
@import '@/assets/styles/DetailView.css';
</style>