import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=>import('../components/Index.vue')
    },
    {
      path: '/message',
      name: 'messages',
      component: ()=>import('../components/Message.vue')
    },
  ]
})

export default router
