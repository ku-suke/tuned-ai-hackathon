<template>
  <div class="page">
    <header class="header">
      <h1>Dashboard</h1>
      <button class="btn btn-danger" @click="handleLogout">ログアウト</button>
    </header>

    <div class="content">
      <section class="templates">
        <div class="d-flex justify-between align-center">
          <h2>プロジェクトテンプレート</h2>
          <button class="btn btn-success" @click="handleCreate">新規作成</button>
        </div>
        <div class="card-grid" v-if="!loading">
          <div v-if="templates.length === 0" class="no-data">
            テンプレートがありません
          </div>
          <div class="card" v-for="template in templates" :key="template.id">
            <div class="d-flex justify-between align-center">
              <h3>{{ template.title }}</h3>
              <span class="badge" :class="template.isPublished ? 'badge-success' : 'badge-gray'">
                {{ template.isPublished ? '公開済' : '下書き' }}
              </span>
            </div>
            <p class="description">{{ template.description }}</p>
            <p class="text-gray text-sm">最終更新: {{ template.updatedAt.toLocaleDateString('ja-JP') }}</p>
            <div class="d-flex gap-sm">
              <button class="btn btn-warning btn-sm" @click="handleEdit(template.id)">編集</button>
              <button class="btn btn-danger btn-sm" @click="handleDelete(template.id)">削除</button>
              <button
                class="btn btn-success btn-sm"
                @click.stop="handleCreateFromTemplate(template.id)"
              >
                このテンプレートでプロジェクトを作成
              </button>
            </div>
          </div>
        </div>
        <div v-else class="loading">
          読み込み中...
        </div>
      </section>

      <section class="projects">
        <h2>プロジェクト</h2>
        <div class="card-grid" v-if="!projectsLoading">
          <div v-if="projects.length === 0" class="no-data">
            プロジェクトがありません
          </div>
          <div class="card" v-for="project in projects" :key="project.id">
            <div class="d-flex justify-between align-center">
              <h3>{{ project.title }}</h3>
              <span class="badge" :class="project.status === 'completed' ? 'badge-success' : 'badge-warning'">
                {{ project.status === 'completed' ? '完了' : '進行中' }}
              </span>
            </div>
            <p class="description">{{ project.description }}</p>
            <p class="text-gray text-sm">最終更新: {{ project.updatedAt.toLocaleDateString('ja-JP') }}</p>
            <div class="d-flex gap-sm">
              <button class="btn btn-primary btn-sm" @click="handleViewProject(project.id)">表示</button>
            </div>
          </div>
        </div>
        <div v-else class="loading">
          読み込み中...
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
import { collection, query, getDocs, deleteDoc, doc, writeBatch } from 'firebase/firestore'
import type { ProjectTemplate, Project } from '@/types/firestore'

const router = useRouter()
const templates = ref<ProjectTemplate[]>([])
const loading = ref(true)
const projects = ref<Project[]>([])
const projectsLoading = ref(true)

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

const fetchProjects = async () => {
  if (!auth.currentUser) return

  try {
    const projectsRef = collection(db, `users/${auth.currentUser.uid}/projects`)
    const q = query(projectsRef)
    const querySnapshot = await getDocs(q)
    
    projects.value = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate()
    })) as Project[]
  } catch (error) {
    console.error('プロジェクト取得エラー:', error)
  } finally {
    projectsLoading.value = false
  }
}

const handleCreate = () => {
  router.push('/template/create')
}

const handleCreateFromTemplate = (templateId: string) => {
  router.push(`/project/create?templateId=${templateId}&type=private`)
}

const handleViewProject = (id: string) => {
  router.push(`/project/${id}`)
}

const handleEdit = (id: string) => {
  router.push(`/template/edit/${id}`)
}

const handleDelete = async (id: string) => {
  if (!auth.currentUser) return
  
  if (!confirm('このテンプレートを削除してもよろしいですか？')) return

  try {
    const batch = writeBatch(db)

    // まずステップのサブコレクションを取得して削除
    const stepsRef = collection(db, `users/${auth.currentUser.uid}/projectTemplates/${id}/steps`)
    const stepsSnapshot = await getDocs(stepsRef)
    stepsSnapshot.forEach(stepDoc => {
      batch.delete(doc(db, `users/${auth.currentUser.uid}/projectTemplates/${id}/steps/${stepDoc.id}`))
    })

    // テンプレート本体を削除
    batch.delete(doc(db, `users/${auth.currentUser.uid}/projectTemplates/${id}`))

    await batch.commit()
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

onMounted(() => {
  fetchTemplates()
  fetchProjects()
})
</script>
