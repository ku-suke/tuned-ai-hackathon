<template>
  <div class="page">
    <header class="header">
      <h1>プロジェクトテンプレートの編集</h1>
      <div class="d-flex gap-md">
        <button class="btn btn-info" v-if="!loading" @click="handlePublish">
          {{ template?.isPublished ? '非公開にする' : '公開する' }}
        </button>
        <button class="btn btn-gray" @click="handleCancel">キャンセル</button>
        <button class="btn btn-success" @click="handleSave" :disabled="loading">保存</button>
      </div>
    </header>

    <div v-if="loading" class="loading">
      読み込み中...
    </div>

    <div v-else-if="!template" class="text-center text-error p-md">
      テンプレートが見つかりません
    </div>

    <div v-else class="content">
      <div class="card mb-lg">
        <div class="form-group">
          <label class="form-label">テンプレート名</label>
          <input type="text" class="form-input" v-model="title" placeholder="テンプレート名を入力">
        </div>
        <div class="form-group">
          <label class="form-label">説明</label>
          <textarea class="form-textarea" v-model="description" placeholder="テンプレートの説明を入力"></textarea>
        </div>
      </div>

      <div class="card">
        <div class="d-flex justify-between align-center mb-md">
          <h2>ステップ</h2>
          <button class="btn btn-primary" @click="addStep">ステップを追加</button>
        </div>

        <div class="d-flex flex-column gap-md">
          <div class="card bg-light" v-for="(step, index) in steps" :key="index">
            <div class="d-flex justify-between align-center mb-md">
              <h3>{{ step.title }}</h3>
              <button
                class="btn btn-danger btn-sm"
                @click="removeStep(index)"
                :disabled="steps.length === 1"
              >削除</button>
            </div>
            
            <div class="form-group">
              <label class="form-label">システムプロンプト</label>
              <textarea
                class="form-textarea"
                v-model="step.systemPrompt"
                placeholder="AIに対するシステムプロンプトを入力"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">ユーザー選択肢プロンプト (オプション)</label>
              <textarea
                class="form-textarea"
                v-model="step.userChoicePrompts"
                placeholder="ユーザーが選択できる選択肢のプロンプトを入力"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">成果物生成プロンプト</label>
              <textarea
                class="form-textarea"
                v-model="step.artifactGenerationPrompt"
                placeholder="成果物を生成するためのプロンプトを入力"
              ></textarea>
            </div>

            <div class="form-group mb-sm">
              <label class="form-label">固定参照ドキュメント</label>
              <div class="card bg-light text-center p-md">
                <button class="btn btn-gray mb-sm">アップロード</button>
                <p class="text-sm text-gray">PDFまたはテキストファイル</p>
              </div>
            </div>

            <div class="d-flex flex-column gap-sm">
              <div
                class="card bg-light d-flex justify-between align-center"
                v-for="(doc, docIndex) in step.referenceDocuments"
                :key="docIndex"
              >
                <span>{{ doc.title }}</span>
                <button class="btn btn-danger btn-sm">削除</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { auth, db } from '@/main'
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import type { ProjectTemplate, ProjectTemplateStep, ReferenceDocument } from '@/types/firestore'

const router = useRouter()
const route = useRoute()
const loading = ref(true)
const template = ref<ProjectTemplate | null>(null)

interface StepForm {
  title: string
  systemPrompt: string
  userChoicePrompts: string[]
  artifactGenerationPrompt: string
  referenceDocuments: ReferenceDocument[]
}

const title = ref('')
const description = ref('')
const steps = ref<StepForm[]>([])

const fetchTemplate = async () => {
  if (!auth.currentUser) return
  
  const templateId = route.params.id as string
  try {
    const templateRef = doc(db, `users/${auth.currentUser.uid}/projectTemplates/${templateId}`)
    const templateDoc = await getDoc(templateRef)
    
    if (templateDoc.exists()) {
      const data = templateDoc.data() as ProjectTemplate
      template.value = { ...data, id: templateDoc.id }
      
      // フォームの初期化
      title.value = data.title
      description.value = data.description
      steps.value = data.steps.map(step => ({
        title: step.title,
        systemPrompt: step.systemPrompt,
        userChoicePrompts: step.userChoicePrompts || [],
        artifactGenerationPrompt: step.artifactGenerationPrompt,
        referenceDocuments: step.referenceDocuments
      }))
    }
  } catch (error) {
    console.error('テンプレート取得エラー:', error)
  } finally {
    loading.value = false
  }
}

const addStep = () => {
  steps.value.push({
    title: `ステップ ${steps.value.length + 1}`,
    systemPrompt: '',
    userChoicePrompts: [],
    artifactGenerationPrompt: '',
    referenceDocuments: []
  })
}

const removeStep = (index: number) => {
  steps.value.splice(index, 1)
}

const handleCancel = () => {
  if (confirm('編集内容は保存されません。キャンセルしますか？')) {
    router.push('/dashboard')
  }
}

const handlePublish = async () => {
  if (!auth.currentUser || !template.value) return

  if (!confirm(template.value.isPublished ? 
    'このテンプレートを非公開にしますか？' : 
    'このテンプレートを公開しますか？'
  )) return

  try {
    const templateId = route.params.id as string
    const templateRef = doc(db, `users/${auth.currentUser.uid}/projectTemplates/${templateId}`)
    await updateDoc(templateRef, {
      isPublished: !template.value.isPublished,
      updatedAt: serverTimestamp()
    })
    template.value.isPublished = !template.value.isPublished
  } catch (error) {
    console.error('公開状態の更新エラー:', error)
    alert('公開状態の更新に失敗しました')
  }
}

const handleSave = async () => {
  if (!auth.currentUser || !template.value) return

  if (!title.value.trim()) {
    alert('テンプレート名を入力してください')
    return
  }

  if (!steps.value.some(step => step.systemPrompt.trim())) {
    alert('少なくとも1つのステップにシステムプロンプトを入力してください')
    return
  }

  try {
    const templateId = route.params.id as string
    const templateRef = doc(db, `users/${auth.currentUser.uid}/projectTemplates/${templateId}`)
    
    await updateDoc(templateRef, {
      title: title.value.trim(),
      description: description.value.trim(),
      updatedAt: serverTimestamp(),
      steps: steps.value.map((step, index) => ({
        id: `step${index + 1}`,
        title: step.title,
        order: index + 1,
        systemPrompt: step.systemPrompt.trim(),
        userChoicePrompts: step.userChoicePrompts,
        referenceDocuments: step.referenceDocuments,
        artifactGenerationPrompt: step.artifactGenerationPrompt.trim()
      }))
    })

    router.push('/dashboard')
  } catch (error) {
    console.error('テンプレート更新エラー:', error)
    alert('テンプレートの更新に失敗しました')
  }
}

onMounted(fetchTemplate)
</script>

<style scoped>
/* スコープ付きCSSを削除し、共通クラスを使用 */
</style>