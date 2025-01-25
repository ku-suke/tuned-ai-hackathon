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
                @click="() => handleShowArtifact(currentStep.artifact)"
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
import type { Project, ProjectStep, ProjectTemplateStep, ReferenceDocument } from '@/types/firestore'

const route = useRoute()
const router = useRouter()
const loading = ref(true)
const project = ref<Project | null>(null)
const currentStep = ref<ProjectStep | null>(null)
const messageInput = ref('')
const chatMessagesRef = ref<HTMLElement | null>(null)
const template = ref<any>(null) // テンプレートのデータ

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
      template.value = templateDoc.data()
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
  if (!content.trim() || !project.value || !currentStep.value) return

  const message = {
    id: crypto.randomUUID(),
    role: 'user' as const,
    content: content.trim(),
    createdAt: new Date()
  }

  // Firestoreを更新
  try {
    const stepIndex = project.value.steps.findIndex(s => s.id === currentStep.value?.id)
    if (stepIndex === -1) return

    await updateDoc(doc(db, `users/${auth.currentUser?.uid}/projects`, project.value.id), {
      [`steps.${stepIndex}.conversations`]: arrayUnion(message),
      updatedAt: Timestamp.now()
    })

    // ローカルステートを更新
    currentStep.value.conversations.push(message)
    messageInput.value = ''

    // AIの応答をシミュレート（実際にはAPIを呼び出す）
    const aiResponse = {
      id: crypto.randomUUID(),
      role: 'assistant' as const,
      content: '申し訳ありませんが、現在AIは準備中です。もう少々お待ちください。',
      createdAt: new Date()
    }

    await updateDoc(doc(db, `users/${auth.currentUser?.uid}/projects`, project.value.id), {
      [`steps.${stepIndex}.conversations`]: arrayUnion(aiResponse),
      updatedAt: Timestamp.now()
    })

    currentStep.value.conversations.push(aiResponse)
  } catch (error) {
    console.error('メッセージ送信エラー:', error)
  }
}

// テンプレートのステップ情報を取得
const getTemplateStep = (step: ProjectStep): ProjectTemplateStep | undefined => {
  return template.value?.steps.find((s: ProjectTemplateStep) => s.id === step.templateStepId)
}

// テンプレートのドキュメント情報を取得
const getTemplateDocument = (step: ProjectStep, doc: { id: string, isEnabled: boolean }): ReferenceDocument | undefined => {
  const templateStep = getTemplateStep(step)
  return templateStep?.referenceDocuments.find(d => d.id === doc.id)
}

// ドキュメントの有効/無効を切り替え
const handleToggleDocument = async (doc: { id: string, isEnabled: boolean }) => {
  if (!project.value || !currentStep.value) return

  try {
    const stepIndex = project.value.steps.findIndex(s => s.id === currentStep.value?.id)
    if (stepIndex === -1) return

    const docIndex = currentStep.value.documents.findIndex(d => d.id === doc.id)
    if (docIndex === -1) return

    await updateDoc(doc(db, `users/${auth.currentUser?.uid}/projects`, project.value.id), {
      [`steps.${stepIndex}.documents.${docIndex}.isEnabled`]: !doc.isEnabled,
      updatedAt: Timestamp.now()
    })

    // ローカルステートを更新
    doc.isEnabled = !doc.isEnabled
  } catch (error) {
    console.error('ドキュメント更新エラー:', error)
  }
}

// 成果物の表示
const handleShowArtifact = (artifact: NonNullable<ProjectStep['artifact']>) => {
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

<style scoped>
.project-detail {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.header {
  background-color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main-content {
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  gap: 1rem;
  height: calc(100vh - 64px);
  padding: 1rem;
}

/* 左カラム: ステップ */
.steps-column {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step-item {
  padding: 1rem;
  border-radius: 4px;
  background-color: #f8f9fa;
  cursor: pointer;
}

.step-item.completed {
  border-left: 4px solid #4CAF50;
}

.step-item.active {
  border-left: 4px solid #007bff;
  background-color: #f0f7ff;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.step-number {
  background-color: #6c757d;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
}

.step-summary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #666;
}

/* 中央カラム: チャット */
.chat-column {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.message {
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: 4px;
  max-width: 80%;
}

.message.system {
  background-color: #f8f9fa;
  margin-left: auto;
  margin-right: auto;
  color: #666;
}

.message.assistant {
  background-color: #f0f7ff;
  margin-right: auto;
}

.message.user {
  background-color: #e9ecef;
  margin-left: auto;
}

.chat-input {
  padding: 1rem;
  border-top: 1px solid #ddd;
}

.preset-buttons {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.preset-button {
  padding: 0.25rem 0.75rem;
  background-color: #e9ecef;
  border: none;
  border-radius: 16px;
  font-size: 0.875rem;
  cursor: pointer;
}

.preset-button:hover {
  background-color: #dee2e6;
}

.input-container {
  display: flex;
  gap: 0.5rem;
}

.input-container textarea {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  height: 80px;
}

/* 右カラム: ドキュメント */
.documents-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.documents-section,
.artifacts-section {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.document-list,
.artifact-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.document-item,
.artifact-item {
  padding: 0.75rem;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.document-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.document-name {
  font-weight: 500;
}

.document-summary,
.artifact-summary {
  font-size: 0.875rem;
  color: #666;
  margin: 0;
}

/* トグルスイッチ */
.toggle {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #4CAF50;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

.view-button {
  padding: 0.25rem 0.5rem;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
}

/* その他 */
.column-title {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  color: #333;
}

h1 {
  margin: 0;
  font-size: 1.5rem;
}

h3 {
  margin: 0;
  font-size: 1rem;
}

h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
}

.no-step-selected {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
}

.no-data {
  text-align: center;
  color: #666;
  padding: 2rem;
}
</style>