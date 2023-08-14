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
    },
    {
      path: '/projects/:id',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    }
  ],
  scrollBehavior (to) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth'
        }
      } 
      
      return { top: 0, left: 0 }
  }
})

export default router
