import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import MyProjects from '@/pages/myprojects.vue'
import AboutMe from '@/pages/aboutme.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name:'home', component: Home },
    { path: '/myprojects', name:'myprojects', component: MyProjects },
    { path: '/aboutme', name:'aboutme', component: AboutMe }
  ]
})

export default router
