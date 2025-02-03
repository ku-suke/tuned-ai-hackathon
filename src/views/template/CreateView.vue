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
      <div class="card">
        <div class="form-group">
          <label class="form-label">テンプレート名</label>
          <input type="text" class="form-input" v-model="title" placeholder="テンプレート名を入力">
        </div>
        <div class="form-group">
          <label class="form-label">説明</label>
          <textarea class="form-textarea" v-model="description" placeholder="テンプレートの説明を入力"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '@/main'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import type { ProjectTemplate, ProjectTemplateStep } from '@/types/firestore'

const router = useRouter()
const title = ref('')
const description = ref('')

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

  try {
    // 初期ステップを作成
    const initialStep: ProjectTemplateStep = {
      id: crypto.randomUUID(),
      title: 'ステップ 1',
      order: 1,
      systemPrompt: '',
      firstMessageTemplate: '',
      referenceDocuments: [],
      artifactGenerationPrompt: ''
    }

    // テンプレートとステップを一緒に作成
    const templateId = crypto.randomUUID()
    const templateData: ProjectTemplate = {
      id: templateId,
      title: title.value.trim(),
      description: description.value.trim(),
      createdAt: serverTimestamp() as any,
      updatedAt: serverTimestamp() as any,
      isPublished: false,
      steps: [initialStep]
    }

    const templatesRef = doc(db, `users/${auth.currentUser.uid}/projectTemplates/${templateId}`)
    await setDoc(templatesRef, templateData)

    // 保存後にEditViewに遷移
    router.push(`/template/edit/${templateId}`)
  } catch (error) {
    console.error('テンプレート保存エラー:', error)
    alert('テンプレートの保存に失敗しました')
  }
}
</script>

<style scoped>
/* スコープ付きCSSを削除し、共通クラスを使用 */
</style>