<template>
  <div class="page">
    <header class="header">
      <h1>新規プロジェクト作成</h1>
    </header>

    <div class="content">
      <div v-if="loading" class="loading">
        読み込み中...
      </div>
      <div v-else>
        <section class="mb-lg" v-if="!selectedTemplate">
          <h2>テンプレートを選択</h2>
          <div class="card-grid">
            <div v-if="templates.length === 0" class="no-data">
              利用可能なテンプレートがありません
            </div>
            <div
              v-for="template in templates"
              :key="template.id"
              class="card clickable"
              @click="handleSelectTemplate(template)"
            >
              <h3>{{ template.title }}</h3>
              <p class="description">{{ template.description }}</p>
              <p class="text-gray text-sm">作成者: {{ template.authorName }}</p>
            </div>
          </div>
        </section>

        <section v-else>
          <div class="d-flex justify-between align-center mb-md">
            <h2>プロジェクト情報入力</h2>
            <button class="btn btn-text" @click="handleBack">
              テンプレート選択に戻る
            </button>
          </div>

          <div class="card">
            <h3 class="mb-md">選択中のテンプレート: {{ selectedTemplate.title }}</h3>
            
            <form @submit.prevent="handleSubmit" class="form">
              <div class="form-group">
                <label for="title">プロジェクト名</label>
                <input
                  id="title"
                  v-model="form.title"
                  type="text"
                  required
                  class="form-control"
                  placeholder="プロジェクト名を入力"
                />
              </div>

              <div class="form-group">
                <label for="description">説明</label>
                <textarea
                  id="description"
                  v-model="form.description"
                  class="form-control"
                  rows="3"
                  placeholder="プロジェクトの説明を入力"
                ></textarea>
              </div>

              <div class="d-flex gap-sm justify-end">
                <button type="submit" class="btn btn-primary" :disabled="creating">
                  {{ creating ? '作成中...' : '作成' }}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '@/main'
import { collection, query, getDocs, addDoc, Timestamp } from 'firebase/firestore'
import type { PublishedProjectTemplate, Project, ProjectStep } from '@/types/firestore'

const router = useRouter()
const loading = ref(true)
const creating = ref(false)
const templates = ref<PublishedProjectTemplate[]>([])
const selectedTemplate = ref<PublishedProjectTemplate | null>(null)

const form = ref({
  title: '',
  description: ''
})

const fetchTemplates = async () => {
  try {
    const templatesRef = collection(db, 'publishedTemplates')
    const q = query(templatesRef)
    const querySnapshot = await getDocs(q)
    
    templates.value = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
      publishedAt: doc.data().publishedAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate()
    })) as PublishedProjectTemplate[]
  } catch (error) {
    console.error('テンプレート取得エラー:', error)
  } finally {
    loading.value = false
  }
}

const handleSelectTemplate = (template: PublishedProjectTemplate) => {
  selectedTemplate.value = template
}

const handleBack = () => {
  selectedTemplate.value = null
  form.value = {
    title: '',
    description: ''
  }
}

const handleSubmit = async () => {
  if (!auth.currentUser || !selectedTemplate.value) return
  
  creating.value = true
  
  try {
    // プロジェクトステップの初期化
    const steps: ProjectStep[] = selectedTemplate.value.steps.map(step => ({
      id: crypto.randomUUID(),
      templateStepId: step.id,
      order: step.order,
      conversations: [],
      documents: step.referenceDocuments.map(doc => ({
        id: doc.id,
        isEnabled: true
      })),
      uploadedDocuments: []
    }))

    // プロジェクトの作成
    const projectData: Omit<Project, 'id'> = {
      userId: auth.currentUser.uid,
      templateId: selectedTemplate.value.id,
      templateType: 'published',
      title: form.value.title,
      description: form.value.description,
      createdAt: Timestamp.now().toDate(),
      updatedAt: Timestamp.now().toDate(),
      status: 'in_progress',
      steps
    }

    const docRef = await addDoc(collection(db, `users/${auth.currentUser.uid}/projects`), projectData)
    router.push(`/project/${docRef.id}`)
  } catch (error) {
    console.error('プロジェクト作成エラー:', error)
    alert('プロジェクトの作成に失敗しました')
  } finally {
    creating.value = false
  }
}

onMounted(fetchTemplates)
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 2rem;
}

.header {
  background-color: white;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* カードグリッド */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card.clickable {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card.clickable:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* フォーム */
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: #333;
}

.form-control {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

textarea.form-control {
  min-height: 100px;
  resize: vertical;
}

/* ステータス表示 */
.loading {
  text-align: center;
  color: #666;
  padding: 2rem;
}

.no-data {
  text-align: center;
  color: #666;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  margin-top: 1rem;
}

/* タイトル */
h1 {
  margin: 0;
  font-size: 1.5rem;
}

h2 {
  margin: 0;
  font-size: 1.25rem;
  color: #333;
}

h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

/* 説明文 */
.description {
  margin: 0.5rem 0;
  color: #666;
  font-size: 0.875rem;
}

/* ユーティリティ */
.mb-lg {
  margin-bottom: 2rem;
}

.mb-md {
  margin-bottom: 1rem;
}

.text-gray {
  color: #666;
}

.text-sm {
  font-size: 0.875rem;
}
</style>