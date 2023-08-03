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
      path: '/curriculum',
      name: 'curriculum',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CurriculumView.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
      return {
        el: '#curriculum',
        top: -10
      }
  }
})

export default router
