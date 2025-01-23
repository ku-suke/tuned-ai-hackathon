import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/main'
import { onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/template/create',
      name: 'template-create',
      component: () => import('../views/template/CreateView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/template/edit/:id',
      name: 'template-edit',
      component: () => import('../views/template/EditView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/project/:id',
      name: 'project-detail',
      component: () => import('../views/project/DetailView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

// 認証状態の監視とナビゲーションガード
let authInitialized = false
const getCurrentUser = () => {
  return new Promise((resolve) => {
    if (authInitialized) {
      resolve(auth.currentUser)
    } else {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        authInitialized = true
        unsubscribe()
        resolve(user)
      })
    }
  })
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.meta.requiresAuth
  const currentUser = await getCurrentUser()

  if (requiresAuth && !currentUser) {
    // 未認証のユーザーが保護されたルートにアクセスしようとした場合
    next('/')
  } else if (!requiresAuth && currentUser && to.path === '/') {
    // 認証済みのユーザーがログインページにアクセスしようとした場合
    next('/dashboard')
  } else {
    next()
  }
})

export default router
