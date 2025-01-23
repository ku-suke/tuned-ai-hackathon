<template>
  <div class="page">
    <header class="header">
      <h1>プロジェクトテンプレートの作成</h1>
      <div class="d-flex gap-md">
        <button class="btn btn-gray" @click="handleCancel">キャンセル</button>
        <button class="btn btn-success" @click="handleSave">保存</button>
      </div>
    </header>

    <div class="content">
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '@/main'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import type { ProjectTemplate, ProjectTemplateStep, ReferenceDocument } from '@/types/firestore'

const router = useRouter()

interface StepForm {
  title: string
  systemPrompt: string
  userChoicePrompts: string[]
  artifactGenerationPrompt: string
  referenceDocuments: ReferenceDocument[]
}

const title = ref('')
const description = ref('')
const steps = ref<StepForm[]>([
  {
    title: 'ステップ 1',
    systemPrompt: '',
    userChoicePrompts: [],
    artifactGenerationPrompt: '',
    referenceDocuments: []
  }
])

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

const handleSave = async () => {
  if (!auth.currentUser) return

  if (!title.value.trim()) {
    alert('テンプレート名を入力してください')
    return
  }

  if (!steps.value.some(step => step.systemPrompt.trim())) {
    alert('少なくとも1つのステップにシステムプロンプトを入力してください')
    return
  }

  try {
    const templateData: Omit<ProjectTemplate, 'id'> = {
      title: title.value.trim(),
      description: description.value.trim(),
      createdAt: serverTimestamp() as any,
      updatedAt: serverTimestamp() as any,
      isPublished: false,
      steps: steps.value.map((step, index) => ({
        id: `step${index + 1}`,
        title: step.title,
        order: index + 1,
        systemPrompt: step.systemPrompt.trim(),
        userChoicePrompts: step.userChoicePrompts,
        referenceDocuments: step.referenceDocuments,
        artifactGenerationPrompt: step.artifactGenerationPrompt.trim()
      }))
    }

    const templatesRef = collection(db, `users/${auth.currentUser.uid}/projectTemplates`)
    await addDoc(templatesRef, templateData)
    router.push('/dashboard')
  } catch (error) {
    console.error('テンプレート保存エラー:', error)
    alert('テンプレートの保存に失敗しました')
  }
}
</script>

<style scoped>
/* スコープ付きCSSを削除し、共通クラスを使用 */
</style>