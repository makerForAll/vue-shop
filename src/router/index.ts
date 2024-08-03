import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('@/components/layoutComponents/HearderBar.vue'),
        SiderBar: () => import('@/components/layoutComponents/SiderBar.vue'),
        MainContainer: () => import('@/components/layoutComponents/Dashboard.vue')
      },
      // props:true,
      meta: { requiredLogin: true }
    },
    {
      path: '/client',
      name: 'client',
      components: {
        default: () => import('@/components/layoutComponents/HearderBar.vue'),
        SiderBar: () => import('@/components/layoutComponents/SiderBar.vue'),
        MainContainer: () => import('@/components/BusinessDepartment/Home.vue')
      },
      // props:true,
      meta: { requiredLogin: true }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
