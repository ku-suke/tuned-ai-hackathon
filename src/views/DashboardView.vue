<template>
  <div class="dashboard">
    <header class="header">
      <h1>Dashboard</h1>
      <button class="logout-button" @click="handleLogout">ログアウト</button>
    </header>

    <div class="content">
      <section class="templates">
        <div class="section-header">
          <h2>プロジェクトテンプレート</h2>
          <button class="create-button" @click="handleCreate">新規作成</button>
        </div>
        <div class="template-list" v-if="!loading">
          <div v-if="templates.length === 0" class="no-data">
            テンプレートがありません
          </div>
          <div class="template-card" v-for="template in templates" :key="template.id">
            <div class="template-header">
              <h3>{{ template.title }}</h3>
              <span class="status-badge" :class="{ published: template.isPublished }">
                {{ template.isPublished ? '公開済' : '下書き' }}
              </span>
            </div>
            <p class="description">{{ template.description }}</p>
            <p class="updated-at">最終更新: {{ template.updatedAt.toLocaleDateString('ja-JP') }}</p>
            <div class="card-actions">
              <button class="action-button edit" @click="handleEdit(template.id)">編集</button>
              <button class="action-button delete" @click="handleDelete(template.id)">削除</button>
            </div>
          </div>
        </div>
        <div v-else class="loading">
          読み込み中...
        </div>
      </section>

      <section class="projects">
        <div class="section-header">
          <h2>プロジェクト</h2>
          <button class="create-button">新規作成</button>
        </div>
        <div class="project-list">
          <div class="project-card" v-for="i in 3" :key="i">
            <h3>プロジェクト {{ i }}</h3>
            <p>最終更新: 2024/01/23</p>
            <div class="card-actions">
              <button class="action-button view">表示</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { auth, db } from '@/main'
import { signOut } from 'firebase/auth'
import { collection, query, getDocs, deleteDoc, doc } from 'firebase/firestore'
import type { ProjectTemplate } from '@/types/firestore'

const router = useRouter()
const templates = ref<ProjectTemplate[]>([])
const loading = ref(true)

const fetchTemplates = async () => {
  if (!auth.currentUser) return

  try {
    const templatesRef = collection(db, `users/${auth.currentUser.uid}/projectTemplates`)
    const q = query(templatesRef)
    const querySnapshot = await getDocs(q)
    
    templates.value = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate()
    })) as ProjectTemplate[]
  } catch (error) {
    console.error('テンプレート取得エラー:', error)
  } finally {
    loading.value = false
  }
}

const handleCreate = () => {
  router.push('/template/create')
}

const handleEdit = (id: string) => {
  router.push(`/template/edit/${id}`)
}

const handleDelete = async (id: string) => {
  if (!auth.currentUser) return
  
  if (!confirm('このテンプレートを削除してもよろしいですか？')) return

  try {
    await deleteDoc(doc(db, `users/${auth.currentUser.uid}/projectTemplates/${id}`))
    templates.value = templates.value.filter(t => t.id !== id)
  } catch (error) {
    console.error('テンプレート削除エラー:', error)
  }
}

const handleLogout = async () => {
  try {
    await signOut(auth)
    router.push('/')
  } catch (error) {
    console.error('ログアウトエラー:', error)
  }
}

onMounted(fetchTemplates)
</script>

<style scoped>
.dashboard {
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

.logout-button {
  padding: 0.5rem 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #c82333;
}

.content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.create-button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.create-button:hover {
  background-color: #45a049;
}

.template-list,
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.template-card,
.project-card {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.action-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  flex: 1;
}

.action-button.edit {
  background-color: #ffc107;
  color: #000;
}

.action-button.edit:hover {
  background-color: #e0a800;
}

.action-button.delete {
  background-color: #dc3545;
  color: white;
}

.action-button.delete:hover {
  background-color: #c82333;
}

.action-button.view {
  background-color: #007bff;
  color: white;
}

.action-button.view:hover {
  background-color: #0056b3;
}

section {
  margin-bottom: 2rem;
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
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

p {
  margin: 0;
  color: #666;
}

.loading {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.no-data {
  text-align: center;
  padding: 2rem;
  color: #666;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.template-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.status-badge {
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: #e9ecef;
  color: #495057;
}

.status-badge.published {
  background-color: #28a745;
  color: white;
}

.description {
  margin-bottom: 0.5rem;
  color: #495057;
}

.updated-at {
  font-size: 0.8rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
}
</style>