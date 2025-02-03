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
          <div v-for="step in projectSteps" :key="step.id" class="step-item" :class="{
            'completed': step.artifact,
            'active': currentStep?.id === step.id
          }" @click="handleSelectStep(step)">
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
            <div class="message model" v-if="getTemplateStep(currentStep)?.firstMessageTemplate">
              {{ getTemplateStep(currentStep)?.firstMessageTemplate }}
            </div>
            <template v-if="currentStep.conversations.length > 0">
              <div v-for="message in currentStep.conversations" :key="message.id" class="message" :class="message.role">
                <MarkdownPreview :content="message.content" />
              </div>
            </template>
            <div v-else class="message system">
              会話を開始してください
            </div>
          </div>

          <div class="chat-input">
            <div v-if="currentStep.stepState?.generatedChoices?.length" class="preset-buttons">
              <button v-for="prompt in currentStep.stepState?.generatedChoices" :key="prompt" class="preset-button"
                @click="() => handleSendMessage(prompt)">
                {{ prompt }}
              </button>
            </div>
            <div class="input-container">
              <textarea v-model="messageInput" placeholder="メッセージを入力..."
                @keydown.enter.prevent="handleSendMessage(messageInput)"></textarea>
              <button class="send-button" @click="() => handleSendMessage(messageInput)"
                :disabled="!messageInput.trim() || isGenerating">
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
            <div v-for="doc in currentStep?.documents" :key="doc.id" class="document-item">
              <div class="document-info">
                <span class="document-name">
                  {{ getTemplateDocument(currentStep, doc)?.title }}
                </span>
                <label class="toggle">
                  <input type="checkbox" :checked="doc.isEnabled" @change="() => handleToggleDocument(doc)">
                  <span class="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="artifacts-section">
          <h2 class="column-title">生成された成果物</h2>
          <div class="artifact-list">
            <div v-if="currentStep?.artifact" class="artifact-item">
              <h4>{{ currentStep.artifact.title }}</h4>
              <p class="artifact-summary">{{ currentStep.artifact.charCount }}文字</p>
              <button class="view-button" @click="currentStep?.artifact && handleShowArtifact(currentStep.artifact)">
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

    <!-- 成果物モーダル -->
    <div v-if="showModal && selectedArtifact" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>{{ selectedArtifact.title }}</h3>
        </div>
        <div class="modal-body">
          <MarkdownPreview :content="selectedArtifact.content" />
        </div>
        <div class="modal-footer">
          <button class="modal-close-button" @click="closeModal">
            閉じる
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectDetail } from '@/composables/useProjectDetail'
import type { ProjectStep } from '@/types/firestore'
import MarkdownPreview from '@/components/MarkdownPreview.vue'

const route = useRoute()
const router = useRouter()
const messageInput = ref('')
const chatMessagesRef = ref<HTMLElement | null>(null)
const showModal = ref(false)
const selectedArtifact = ref<NonNullable<ProjectStep['artifact']> | undefined>(undefined)

const {
  loading,
  project,
  projectSteps,
  currentStep,
  isGenerating,
  fetchProject,
  handleSelectStep,
  handleSendMessage: sendMessage,
  getTemplateStep,
  getTemplateDocument,
  handleToggleDocument,
} = useProjectDetail()

// メッセージ送信のラッパー
const handleSendMessage = async (content: string) => {
  await sendMessage(content)
  messageInput.value = ''
}

const handleBack = () => {
  router.push('/dashboard')
}

const handleShowArtifact = (artifact: NonNullable<ProjectStep['artifact']>) => {
  selectedArtifact.value = artifact
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedArtifact.value = undefined
}

// チャットを一番下までスクロール
watch(() => currentStep.value?.conversations, async () => {
  await nextTick()
  if (chatMessagesRef.value) {
    chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight
  }
}, { deep: true })

// プロジェクトの読み込み
onMounted(() => {
  if (route.params.id) {
    fetchProject(route.params.id as string)
  }
})
</script>

<style>
@import '@/assets/styles/DetailView.css';
</style>