import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import DetailView from './views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: DetailView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' }
    }
  ]
})  

export default router
