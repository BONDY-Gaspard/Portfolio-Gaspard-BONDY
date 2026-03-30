import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import MyProjects from '@/pages/myprojects.vue'
import AboutMe from '@/pages/aboutme.vue'
import Contact from '@/pages/contact.vue'
import LegalNotice from '@/pages/legalnotice.vue'
import ProjectPage from '@/pages/projectpage.vue'
import Maintenance from '@/pages/maintenance.vue'
// ... autres imports

const maintenanceMode = true // ⬅️ change à false pour désactiver

const routes = maintenanceMode
  ? [
      { path: '/', name: 'maintenance', component: Maintenance },
      { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
  : [
      { path: '/', name:'home', component: Home },
      { path: '/myprojects', name:'myprojects', component: MyProjects },
      { path: '/aboutme', name:'aboutme', component: AboutMe },
      { path: '/contact', name:'contact', component: Contact },
      { path: '/legalnotice', name:'legalnotice', component: LegalNotice },
      { path: '/:projectName', name: 'projectpage', component: ProjectPage, props: true }
    ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
