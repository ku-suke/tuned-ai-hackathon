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
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import type { ProjectTemplate } from '@/types/firestore'

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
    const templateData: Omit<ProjectTemplate, 'id'> = {
      title: title.value.trim(),
      description: description.value.trim(),
      createdAt: serverTimestamp() as any,
      updatedAt: serverTimestamp() as any,
      isPublished: false,
      steps: [
        {
          id: crypto.randomUUID(),
          title: 'ステップ 1',
          order: 1,
          systemPrompt: '',
          userChoicePrompts: [],
          referenceDocuments: [],
          artifactGenerationPrompt: ''
        }
      ]
    }

    const templatesRef = collection(db, `users/${auth.currentUser.uid}/projectTemplates`)
    const docRef = await addDoc(templatesRef, templateData)
    // 保存後にEditViewに遷移
    router.push(`/template/edit/${docRef.id}`)
  } catch (error) {
    console.error('テンプレート保存エラー:', error)
    alert('テンプレートの保存に失敗しました')
  }
}
</script>

<style scoped>
/* スコープ付きCSSを削除し、共通クラスを使用 */
</style>