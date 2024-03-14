import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import MyProjects from '@/pages/myprojects.vue'
import AboutMe from '@/pages/aboutme.vue'
import Contact from '@/pages/contact.vue'
import LegalNotice from '@/pages/legalnotice.vue'
import ProjectPage from '@/pages/projectpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name:'home', component: Home },
    { path: '/myprojects', name:'myprojects', component: MyProjects },
    { path: '/aboutme', name:'aboutme', component: AboutMe },
    { path: '/contact', name:'contact', component: Contact },
    { path: '/legalnotice', name:'legalnotice', component: LegalNotice },
    { path: '/:projectName', name: 'projectpage', component: ProjectPage, props: true }
  ]
})

export default router
