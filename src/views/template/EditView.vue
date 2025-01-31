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
              <input
                type="text"
                class="form-input step-title"
                v-model="step.title"
                :placeholder="`ステップ ${index + 1}`"
              >
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
                v-model="step.userChoicePromptTemplate"
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
                <input
                  type="file"
                  ref="fileInput"
                  @change="(e) => handleFileUpload(e, index)"
                  accept=".pdf,.txt"
                  class="hidden"
                  :id="`file-upload-${index}`"
                />
                <label :for="`file-upload-${index}`" class="btn btn-gray mb-sm">
                  {{ uploadLoading ? '読み込み中...' : 'アップロード' }}
                </label>
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
                <button class="btn btn-danger btn-sm" @click="handleDocumentDelete(index, docIndex)">削除</button>
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
import { auth, db, storage } from '@/main'
import {
  doc,
  getDoc,
  getDocs,
  updateDoc,
  serverTimestamp,
  collection,
  addDoc,
  writeBatch,
  query,
  orderBy
} from 'firebase/firestore'
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage'
import type { ProjectTemplate, ProjectTemplateStep, ReferenceDocument } from '@/types/firestore'

const router = useRouter()
const route = useRoute()
const loading = ref(true)
const uploadLoading = ref(false)
const template = ref<ProjectTemplate | null>(null)

interface StepForm {
  id?: string // Firestoreに保存された際のID
  title: string
  systemPrompt: string
  userChoicePromptTemplate: string
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

      // ステップをサブコレクションから取得
      const stepsRef = collection(templateRef, 'steps')
      const stepsQuery = query(stepsRef, orderBy('order'))
      const stepsSnapshot = await getDocs(stepsQuery)
      
      steps.value = stepsSnapshot.docs.map(stepDoc => {
        const stepData = stepDoc.data() as ProjectTemplateStep
        return {
          id: stepDoc.id,
          title: stepData.title,
          systemPrompt: stepData.systemPrompt,
          userChoicePrompts: [], // 非推奨: userChoicePromptTemplateを使用
          userChoicePromptTemplate: stepData.userChoicePromptTemplate || '',
          artifactGenerationPrompt: stepData.artifactGenerationPrompt,
          referenceDocuments: stepData.referenceDocuments
        }
      })
    }
  } catch (error) {
    console.error('テンプレート取得エラー:', error)
  } finally {
    loading.value = false
  }
}

const addStep = async () => {
  if (!auth.currentUser || !template.value) return

  try {
    const stepId = crypto.randomUUID()
    const newStep: StepForm = {
      id: stepId,
      title: `ステップ ${steps.value.length + 1}`,
      systemPrompt: '',
      userChoicePromptTemplate: '',
      artifactGenerationPrompt: '',
      referenceDocuments: []
    }
    steps.value.push(newStep)
  } catch (error) {
    console.error('ステップ追加エラー:', error)
    alert('ステップの追加に失敗しました')
  }
}

const removeStep = async (index: number) => {
  if (!auth.currentUser || !template.value) return

  const step = steps.value[index]
  if (!step) return

  // ファイルの削除
  try {
    for (const doc of step.referenceDocuments) {
      await handleDocumentDelete(index, step.referenceDocuments.indexOf(doc))
    }
  } catch (error) {
    console.error('ファイル削除エラー:', error)
  }

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

const handleFileUpload = async (event: Event, stepIndex: number) => {
  if (!auth.currentUser || !template.value) return
  const input = event.target as HTMLInputElement
  if (!input.files?.length) return

  const file = input.files[0]
  const step = steps.value[stepIndex]
  if (!step || !step.id) return

  uploadLoading.value = true
  try {
    const fileName = `${file.name}-${Date.now()}`
    const filePath = `users/${auth.currentUser.uid}/projectTemplates/${template.value.id}/steps/${step.id}/${fileName}`
    const fileRef = storageRef(storage, filePath)

    // ファイルをアップロード
    await uploadBytes(fileRef, file)
    const downloadUrl = await getDownloadURL(fileRef)

    // referenceDocumentsに追加
    const newDoc: ReferenceDocument = {
      id: crypto.randomUUID(),
      title: file.name,
      content: downloadUrl,
      type: file.type.includes('pdf') ? 'pdf' : 'text'
    }
    step.referenceDocuments.push(newDoc)

    // 入力をクリア
    input.value = ''
  } catch (error) {
    console.error('ファイルアップロードエラー:', error)
    alert('ファイルのアップロードに失敗しました')
  } finally {
    uploadLoading.value = false
  }
}

const handleDocumentDelete = async (stepIndex: number, docIndex: number) => {
  if (!auth.currentUser || !template.value) return

  const step = steps.value[stepIndex]
  if (!step || !step.id) return

  const doc = step.referenceDocuments[docIndex]
  if (!doc) return

  try {
    // Storageからファイルを削除
    const fileRef = storageRef(storage, doc.content)
    await deleteObject(fileRef)

    // referenceDocumentsから削除
    step.referenceDocuments.splice(docIndex, 1)
  } catch (error) {
    console.error('ドキュメント削除エラー:', error)
    alert('ドキュメントの削除に失敗しました')
  }
}

const handleSave = async () => {
  const currentUser = auth.currentUser
  if (!currentUser || !template.value) return

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
    const batch = writeBatch(db)

    // テンプレート本体の更新
    const templateRef = doc(db, `users/${currentUser.uid}/projectTemplates/${templateId}`)
    batch.update(templateRef, {
      title: title.value.trim(),
      description: description.value.trim(),
      updatedAt: serverTimestamp()
    })

    // 既存のステップを全て取得
    const stepsRef = collection(db, `users/${currentUser.uid}/projectTemplates/${templateId}/steps`)
    const existingSteps = await getDocs(stepsRef)
    
    // 既存のステップをMapに変換（高速検索用）
    const existingStepsMap = new Map(
      existingSteps.docs.map(doc => [doc.id, doc])
    )

    // 各ステップの更新または作成
    steps.value.forEach((step, index) => {
      const stepData = {
        title: step.title.trim(),
        order: index + 1,
        systemPrompt: step.systemPrompt.trim(),
        userChoicePromptTemplate: step.userChoicePromptTemplate.trim(),
        referenceDocuments: step.referenceDocuments,
        artifactGenerationPrompt: step.artifactGenerationPrompt.trim()
      }

      if (step.id && existingStepsMap.has(step.id)) {
        // 既存のステップを更新
        const stepRef = doc(db, `users/${currentUser.uid}/projectTemplates/${templateId}/steps/${step.id}`)
        batch.update(stepRef, stepData)
        existingStepsMap.delete(step.id)
      } else {
        // 新しいステップを作成
        const newStepRef = doc(collection(db, `users/${currentUser.uid}/projectTemplates/${templateId}/steps`))
        batch.set(newStepRef, {
          ...stepData,
          id: newStepRef.id
        })
      }
    })

    // 削除されたステップを処理
    existingStepsMap.forEach((_, stepId) => {
      const stepRef = doc(db, `users/${currentUser.uid}/projectTemplates/${templateId}/steps/${stepId}`)
      batch.delete(stepRef)
    })

    await batch.commit()
    router.push('/dashboard')
  } catch (error) {
    console.error('テンプレート更新エラー:', error)
    alert('テンプレートの更新に失敗しました')
  }
}

onMounted(fetchTemplate)
</script>

<style scoped>
.hidden {
  display: none;
}

.step-title {
  font-size: 1.1rem;
  font-weight: bold;
  border: 1px solid transparent;
  background: transparent;
  padding: var(--space-xs) var(--space-sm);
  margin: -var(--space-xs) -var(--space-sm);
}

.step-title:hover,
.step-title:focus {
  border-color: #ddd;
  background: var(--color-white);
}
</style>