import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('../views/OtherView.vue')
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: () => import('../views/AboutMe.vue')
    }
  ]
})

export default router
