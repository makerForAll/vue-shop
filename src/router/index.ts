import { createRouter, createWebHistory } from 'vue-router'
import manageRoutes from './manageRoutes'
import manageHome from './manageHome'
import bizRoutes from './bizRoutes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...manageRoutes, ...manageHome, ...bizRoutes]
})

export default router
