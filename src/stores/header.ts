import { defineStore } from 'pinia'
export const useHeaderStore = defineStore('header', {
  state: () => ({
    scale: 1,
    drawerVisible: false,
    partysoftwareId: ''
  }),

  getters: {
    // 获取缩放比例
    getScale: (state) => state.scale,

    // 获取抽屉的可见性状态
    isDrawerVisible: (state) => state.drawerVisible
  },

  actions: {
    // 放大页面
    zoomIn() {
      this.scale += 0.1
    },

    // 缩小页面
    zoomOut() {
      if (this.scale > 0.1) {
        this.scale -= 0.1
      }
    },

    // 重置缩放比例
    resetZoom() {
      this.scale = 1
    },

    // 切换抽屉的可见性
    toggleDrawer(visible: boolean) {
      this.drawerVisible = visible
    }
  }
})
