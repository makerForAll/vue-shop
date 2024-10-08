import type { RouteRecordRaw } from 'vue-router'

// 默认组件占位符
const DefaultHeader = () => import('@/0-manage-hub/layoutComponents/404/DefaultHeader.vue')
const DefaultSidebar = () => import('@/0-manage-hub/layoutComponents/404/DefaultSiderBar.vue')
const DefaultMainContainer = () => import('@/0-manage-hub/layoutComponents/404/DefaultMain.vue')

const manageHome: RouteRecordRaw[] = [
  {
    path: '/partysoftware/:partysoftwareId/',
    components: getComponentsBySoftwareName('2级资产运营软件_1'), // 默认组件配置
    async beforeEnter(to, from, next) {
      try {
        // 动态引入 store
        const { usePartySoftwareStore } = await import('@/stores/partysoftware')
        const { useSoftwareStore } = await import('@/stores/software')
        const partySoftwareStore = usePartySoftwareStore()
        const softwareStore = useSoftwareStore()

        const partysoftwareId = to.params.partysoftwareId as string

        // 通过 API 或 Store 获取 partysoftware 数据
        const partysoftwareData = await partySoftwareStore.readByIdForRel(partysoftwareId)
        console.log('partysoftwareData----------------', partysoftwareData)
        if (!partysoftwareData) {
          return next('/404') // 如果找不到数据，则跳转到404页面
        }

        // 获取 software.name 用于筛选组件
        // softwareStore.readById(partysoftwareData.softwareId as string);
        const softwareName = partysoftwareData.software?.name as string
        console.log('softwareName------', softwareName)

        // 根据软件名称动态选择组件
        const components = getComponentsBySoftwareName(softwareName)

        // 动态设置匹配的路由组件
        to.matched[0].components = components
        next()
      } catch (error) {
        console.error('Error loading partysoftware data:', error)
        next('/500') // 处理错误，跳转到错误页面
      }
    },
    props: {
      Header: true,
      SiderBar: true,
      MainContainer: (route) => ({ partysoftwareId: route.params.partysoftwareId })
    }, // 传递 props
    meta: { requiredLogin: true }
  }
]

// 动态获取组件，确保所有组件都有默认值
function getComponentsBySoftwareName(softwareName: string | undefined) {
  return {
    Header:
      softwareName === '2级资源运营软件_1'
        ? () => import('@/2-biz-complex/layoutComponents/HearderBar.vue')
        : DefaultHeader,
    SiderBar:
      softwareName === '2级资源运营软件_1'
        ? () => import('@/2-biz-complex/layoutComponents/SiderBar.vue')
        : DefaultSidebar,
    MainContainer:
      softwareName === '2级资源运营软件_1'
        ? () => import('@/2-biz-complex/layoutComponents/DashBoardView.vue')
        : DefaultMainContainer
  }
}

export default manageHome
