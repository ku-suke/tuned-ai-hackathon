import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/template/create',
      name: 'template-create',
      component: () => import('../views/template/CreateView.vue')
    },
    {
      path: '/template/edit/:id',
      name: 'template-edit',
      component: () => import('../views/template/EditView.vue')
    },
    {
      path: '/project/:id',
      name: 'project-detail',
      component: () => import('../views/project/DetailView.vue')
    }
  ]
})

export default router
