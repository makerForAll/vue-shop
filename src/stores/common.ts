// store.ts
import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
  state: () => ({
    printOrientation: 'portrait' as 'portrait' | 'landscape'
  }),
  actions: {
    setOrientation(orientation: 'portrait' | 'landscape') {
      this.printOrientation = orientation
    },
    insertDynamicCSS(orientation: 'portrait' | 'landscape') {
      // 先移除旧的样式
      let styleElement
      if (document.getElementById('dynamic-print-style')) {
        styleElement = document.getElementById('dynamic-print-style')
        if (styleElement) {
          styleElement.remove()
        }
      }

      // 创建并插入新的样式
      styleElement = document.createElement('style')
      styleElement.id = 'dynamic-print-style'

      const styles = `
          @media print {
            @page { size: ${orientation}; margin: 10mm; }
            #printArea {
              font-size: 14pt;
            }
          }
        `

      // 使用 textContent 插入样式
      styleElement.textContent = styles
      document.head.appendChild(styleElement)
    }
  }
})
