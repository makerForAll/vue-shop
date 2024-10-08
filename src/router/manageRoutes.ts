// src/router/manageRoutes.ts
// src/router/manageRoutes.ts
import type { RouteRecordRaw } from 'vue-router'

const manageRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    components: {
      Header: () => import('@/0-manage-hub/layoutComponents/HearderBar.vue'),
      // SiderBar: () => import('@/0-manage-hub/layoutComponents/SiderBar.vue'),
      MainContainer: () => import('@/0-manage-hub/AssetSoftView/AssetSoftViewHome.vue')
    }
  },
  {
    path: '/manage/view',
    components: {
      Header: () => import('@/0-manage-hub/layoutComponents/HearderBar.vue'),
      SiderBar: () => import('@/0-manage-hub/layoutComponents/SiderBar.vue'),
      MainContainer: () => import('@/0-manage-hub/AssetSoftView/AssetSoftViewHome.vue')
    }
  },
  {
    path: '/manage/home',
    components: {
      Header: () => import('@/0-manage-hub/layoutComponents/HearderBar.vue'),
      SiderBar: () => import('@/0-manage-hub/layoutComponents/SiderBar.vue'),
      MainContainer: () => import('@/0-manage-hub/SetView/ReadMainHome.vue')
    }
  },
  {
    path: '/manage/party',
    components: {
      Header: () => import('@/0-manage-hub/layoutComponents/HearderBar.vue'),
      SiderBar: () => import('@/0-manage-hub/layoutComponents/SiderBar.vue'),
      MainContainer: () => import('@/0-manage-hub/SetView/PartyView.vue')
    }
  },
  {
    path: '/manage/software',
    components: {
      Header: () => import('@/0-manage-hub/layoutComponents/HearderBar.vue'),
      SiderBar: () => import('@/0-manage-hub/layoutComponents/SiderBar.vue'),
      MainContainer: () => import('@/0-manage-hub/SetView/SoftwareView.vue')
    }
  },
  {
    path: '/manage/partysoftware',
    components: {
      Header: () => import('@/0-manage-hub/layoutComponents/HearderBar.vue'),
      SiderBar: () => import('@/0-manage-hub/layoutComponents/SiderBar.vue'),
      MainContainer: () => import('@/0-manage-hub/SetView/PartySoftwareView.vue')
    }
  }
]

export default manageRoutes
