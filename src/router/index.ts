import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'party',
      components: {
        default: () => import('@/components/layoutComponents/HearderBar.vue'),
        // SiderBar: () => import('@/components/layoutComponents/SiderBar.vue'),
        MainContainer: () => import('@/components/MainHome.vue')
      },
      // props:true,
      meta: { requiredLogin: true }
    },
    {
      path: '/party/:partyId/',
      // name: 'party-home',
      components: {
        default: () => import('@/components/layoutComponents/HearderBar.vue'),
        SiderBar: () => import('@/components/layoutComponents/SiderBar.vue'),
        MainContainer: () => import('@/components/layoutComponents/DashBoardView.vue')
      },
      props: {
        default: true,
        SiderBar: true,
        MainContainer: true // 将 `partyId` 作为 `props` 传递给 `MainContainer` 组件
      },
      meta: { requiredLogin: true }
    },

    {
      path: '/party/:partyId/client',
      // name: 'client',
      components: {
        default: () => import('@/components/layoutComponents/HearderBar.vue'),
        SiderBar: () => import('@/components/layoutComponents/SiderBar.vue'),
        MainContainer: () => import('@/components/DepartmentBusiness/BusinessDepartmentHome.vue')
      },
      props: {
        default: true,
        SiderBar: true,
        MainContainer: true // 将 `partyId` 作为 `props` 传递给 `MainContainer` 组件
      },
      meta: { requiredLogin: true }
    },
    {
      path: '/party/:partyId/contract',
      // name: 'contract',
      components: {
        default: () => import('@/components/layoutComponents/HearderBar.vue'),
        SiderBar: () => import('@/components/layoutComponents/SiderBar.vue'),
        MainContainer: () => import('@/components/DepartmentFinance/ContractPayHome.vue')
      },
      props: {
        default: true,
        SiderBar: true,
        MainContainer: true // 将 `partyId` 作为 `props` 传递给 `MainContainer` 组件
      },
      meta: { requiredLogin: true }
    },
    {
      path: '/party/:partyId/unity',
      // name: 'unity',
      components: {
        default: () => import('@/components/layoutComponents/HearderBar.vue'),
        SiderBar: () => import('@/components/layoutComponents/SiderBar.vue'),
        MainContainer: () => import('@/components/DepartmentEngineering/UnityHome.vue')
      },
      props: {
        default: true,
        SiderBar: true,
        MainContainer: true // 将 `partyId` 作为 `props` 传递给 `MainContainer` 组件
      },
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
