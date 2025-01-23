<template>
  <div class="template-create">
    <header class="header">
      <h1>プロジェクトテンプレートの作成</h1>
      <div class="header-actions">
        <button class="cancel-button" @click="handleCancel">キャンセル</button>
        <button class="save-button" @click="handleSave">保存</button>
      </div>
    </header>

    <div class="content">
      <div class="basic-info">
        <div class="form-group">
          <label>テンプレート名</label>
          <input type="text" v-model="title" placeholder="テンプレート名を入力">
        </div>
        <div class="form-group">
          <label>説明</label>
          <textarea v-model="description" placeholder="テンプレートの説明を入力"></textarea>
        </div>
      </div>

      <div class="steps-section">
        <div class="section-header">
          <h2>ステップ</h2>
          <button class="add-step-button" @click="addStep">ステップを追加</button>
        </div>

        <div class="steps-list">
          <div class="step-item" v-for="(step, index) in steps" :key="index">
            <div class="step-header">
              <h3>{{ step.title }}</h3>
              <button class="delete-step-button" @click="removeStep(index)" :disabled="steps.length === 1">削除</button>
            </div>
            
            <div class="step-content">
              <div class="form-group">
                <label>システムプロンプト</label>
                <textarea v-model="step.systemPrompt" placeholder="AIに対するシステムプロンプトを入力"></textarea>
              </div>

              <div class="form-group">
                <label>ユーザー選択肢プロンプト (オプション)</label>
                <textarea v-model="step.userChoicePrompts" placeholder="ユーザーが選択できる選択肢のプロンプトを入力"></textarea>
              </div>

              <div class="form-group">
                <label>成果物生成プロンプト</label>
                <textarea v-model="step.artifactGenerationPrompt" placeholder="成果物を生成するためのプロンプトを入力"></textarea>
              </div>

              <div class="form-group">
                <label>固定参照ドキュメント</label>
                <div class="document-upload">
                  <button class="upload-button">アップロード</button>
                  <p class="upload-note">PDFまたはテキストファイル</p>
                </div>
                <div class="document-list">
                  <div class="document-item" v-for="(doc, docIndex) in step.referenceDocuments" :key="docIndex">
                    <span>{{ doc.title }}</span>
                    <button class="remove-document">削除</button>
                  </div>
                </div>
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
.template-create {
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

.header-actions {
  display: flex;
  gap: 1rem;
}

.content {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.steps-section {
  margin-top: 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.step-item {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.document-upload {
  border: 2px dashed #ddd;
  padding: 1rem;
  text-align: center;
  border-radius: 4px;
}

.document-list {
  margin-top: 1rem;
}

.document-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #f8f9fa;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.save-button {
  background-color: #4CAF50;
  color: white;
}

.save-button:hover:not(:disabled) {
  background-color: #45a049;
}

.cancel-button {
  background-color: #6c757d;
  color: white;
}

.cancel-button:hover:not(:disabled) {
  background-color: #5a6268;
}

.add-step-button {
  background-color: #007bff;
  color: white;
}

.add-step-button:hover:not(:disabled) {
  background-color: #0056b3;
}

.delete-step-button {
  background-color: #dc3545;
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.delete-step-button:hover:not(:disabled) {
  background-color: #c82333;
}

.upload-button {
  background-color: #6c757d;
  color: white;
  margin-bottom: 0.5rem;
}

.upload-button:hover:not(:disabled) {
  background-color: #5a6268;
}

.upload-note {
  color: #666;
  margin: 0;
  font-size: 0.875rem;
}

.remove-document {
  background-color: #dc3545;
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.remove-document:hover:not(:disabled) {
  background-color: #c82333;
}

h1 {
  margin: 0;
  font-size: 1.5rem;
}

h2 {
  margin: 0;
  font-size: 1.25rem;
}

h3 {
  margin: 0;
  font-size: 1.1rem;
}
</style>