import type { RouteRecordRaw } from 'vue-router'

const bizRoutes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   // name: 'party',
  //   components: {
  //     default: () => import('@/2-biz-complex/layoutComponents/HearderBar.vue'),
  //     // SiderBar: () => import('@/components/layoutComponents/SiderBar.vue'),
  //     MainContainer: () => import('@/components/MainHome.vue')
  //   },
  //   // props:true,
  //   meta: { requiredLogin: true }
  // },
  // {
  //   path: '/partysoftware/:partysoftwareId/',
  //   // name: 'party-home',
  //   components: {
  //     Header: () => import('@/2-biz-complex/layoutComponents/HearderBar.vue'),
  //     SiderBar: () => import('@/2-biz-complex/layoutComponents/SiderBar.vue'),
  //     MainContainer: () => import('@/2-biz-complex/DepartmentBusiness/BusinessDepartmentHome.vue')
  //   },
  //   props: {
  //     Header: true,
  //     SiderBar: true,
  //     MainContainer: true // 将 `partyId` 作为 `props` 传递给 `MainContainer` 组件
  //   },
  //   meta: { requiredLogin: true }
  // },
  {
    path: '/partysoftware/:partysoftwareId/client',
    // name: 'party-home',
    components: {
      Header: () => import('@/2-biz-complex/layoutComponents/HearderBar.vue'),
      SiderBar: () => import('@/2-biz-complex/layoutComponents/SiderBar.vue'),
      MainContainer: () => import('@/2-biz-complex/DepartmentBusiness/BusinessDepartmentHome.vue')
    },
    props: {
      Header: true,
      SiderBar: true,
      MainContainer: true // 将 `partyId` 作为 `props` 传递给 `MainContainer` 组件
    },
    meta: { requiredLogin: true }
  },

  {
    path: '/partysoftware/:partysoftwareId/servers',
    // name: 'party-home',
    components: {
      Header: () => import('@/2-biz-complex/layoutComponents/HearderBar.vue'),
      SiderBar: () => import('@/2-biz-complex/layoutComponents/SiderBar.vue'),
      MainContainer: () => import('@/2-biz-complex/DepartmentServices/ServicesHome.vue')
    },
    props: {
      Header: true,
      SiderBar: true,
      MainContainer: true // 将 `partyId` 作为 `props` 传递给 `MainContainer` 组件
    },
    meta: { requiredLogin: true }
  },
  {
    path: '/partysoftware/:partysoftwareId/finance',
    // name: 'contract',
    components: {
      Header: () => import('@/2-biz-complex/layoutComponents/HearderBar.vue'),
      SiderBar: () => import('@/2-biz-complex/layoutComponents/SiderBar.vue'),
      // MainContainer: () => import('@/2-biz-complex/DepartmentFinance/ContractPayHome.vue')
      // MainContainer: () => import('@/2-biz-complex/cp-projectCP/ClientFinanceHome/test.vue')
      MainContainer: () => import('@/2-biz-complex/DepartmentFinance/ContractPayHome.vue')
    },
    props: {
      Header: true,
      SiderBar: true,
      MainContainer: true // 将 `partyId` 作为 `props` 传递给 `MainContainer` 组件
    },
    meta: { requiredLogin: true }
  },
  {
    path: '/partysoftware/:partysoftwareId/finance2',
    // name: 'contract',
    components: {
      Header: () => import('@/2-biz-complex/layoutComponents/HearderBar.vue'),
      SiderBar: () => import('@/2-biz-complex/layoutComponents/SiderBar.vue'),
      // MainContainer: () => import('@/2-biz-complex/DepartmentFinance/ContractPayHome.vue')
      // MainContainer: () => import('@/2-biz-complex/cp-projectCP/ClientFinanceHome/test.vue')
      MainContainer: () => import('@/2-biz-complex/cp-projectCP/ClientFinanceHome/test4.vue')
    },
    props: {
      Header: true,
      SiderBar: true,
      MainContainer: true // 将 `partyId` 作为 `props` 传递给 `MainContainer` 组件
    },
    meta: { requiredLogin: true }
  },
  {
    path: '/partysoftware/:partysoftwareId/unity',
    // name: 'unity',
    components: {
      Header: () => import('@/2-biz-complex/layoutComponents/HearderBar.vue'),
      SiderBar: () => import('@/2-biz-complex/layoutComponents/SiderBar.vue'),
      MainContainer: () => import('@/2-biz-complex/DepartmentEngineering/UnityHome.vue')
    },
    props: {
      Header: true,
      SiderBar: true,
      MainContainer: true // 将 `partyId` 作为 `props` 传递给 `MainContainer` 组件
    },
    meta: { requiredLogin: true }
  },
  {
    path: '/partysoftware/:partysoftwareId/contract',
    // name: 'unity',
    components: {
      Header: () => import('@/2-biz-complex/layoutComponents/HearderBar.vue'),
      SiderBar: () => import('@/2-biz-complex/layoutComponents/SiderBar.vue'),
      MainContainer: () => import('@/2-biz-complex/DepartmentEngineering/UnityHome.vue')
    },
    props: {
      Header: true,
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

export default bizRoutes
