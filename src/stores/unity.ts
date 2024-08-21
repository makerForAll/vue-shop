import { defineStore } from 'pinia'
import { message } from 'ant-design-vue'

// ------------------------------
import type { ApiResults } from '@/services/vo/models-common'
//------------------------------------------

import customApi from '@/custom/api/core/custom-http-client' // 导入自定义 API 实例
import type { CUnityVO, RUnityVO, UUnityVO } from '@/services/vo/unity'
import unityService from '@/services/unityService'

export const useUnityStore = defineStore('unity', {
  // 其他配置...
  state: () => {
    // 可以写一些逻辑
    return {
      data: {
        tabsKey: 0 as number,
        CItem: {} as CUnityVO,
        UItem: {} as UUnityVO,
        RItem: {} as RUnityVO,
        RItems: [] as RUnityVO[],
        total: 0,
        selectName: '',
        selectID: '', // 要更新的对象
        loading: false // store 的数据 (data)
      }
    }
  },
  getters: {
    // store 的计算属性 (computed)
    // addTodayTime: (state) => (data: any) => {
    //   // 在使用Create时，默认添加注册时间
    //   data.createdAt = dayjs() as unknown as string
    // },
    // formatCreatedAt: (state) => {
    //   return (date: dayjs.Dayjs | null) =>
    //     date ? date.tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss') : 'N/A'
    // },
    // getKeyToState: (state) => {
    //   return (data: number) => (state.data.tabsKey = data)
    // },
    getInit: (state) => {
      return () => {
        // 完整的初始化对象，确保包含所有必需的字段
        const defaultValue: CUnityVO = {
          plan: null,
          code: '',
          area: 0,
          shared_area: 0,
          coordinates: '',
          angle: 0
        }
        state.data.CItem = defaultValue
      }
    }
  },
  actions: {
    async updateSelectID(id: string, name: string) {
      this.data.selectID = id
      this.data.selectName = name
    },
    async clearSelectID() {
      this.data.selectID = ''
    },
    async create(data: any) {
      this.data.loading = true
      const response = (await unityService.create(data)) as ApiResults<RUnityVO>
      console.log('response,', response)

      if (response) {
        this.data.CItem = response.data[0]
        // 更新本地 state 中的 unity 数据 -------------------------------------------

        this.data.RItems.unshift(response.data[0])
        this.data.loading = false
        message.success('创建甲方信息成功')
        // this.read()
      }
    },

    async read(
      params: any = {
        current: 1,
        pagesize: 10
      },
      filters: any = {}
    ): Promise<RUnityVO[]> {
      this.data.loading = true
      // 异步编程获取数据
      const response = (await unityService.read(params, filters)) as ApiResults<RUnityVO>
      if (response) {
        this.data.RItems = response.data as RUnityVO[]
        this.data.total = response.total as number
        this.data.loading = false
        message.success('获取信息成功')
      }
      return response?.data
    },

    async readById(id: string): Promise<RUnityVO> {
      this.data.loading = true
      const response = (await unityService.readById(id)) as ApiResults<RUnityVO>
      if (response) {
        this.data.UItem = response.data[0]
        this.data.loading = false
        message.success('获取信息成功')
      }
      return response?.data[0]
    },

    async update(id: string, requestBody: any) {
      // console.log('id---', id)
      this.data.loading = true
      const response = (await unityService.update(id, requestBody)) as ApiResults<UUnityVO>
      if (response) {
        this.data.UItem = response.data[0]
        // 更新本地缓存
        const index = this.data.RItems.findIndex((item: any) => item.id === id)
        if (index !== -1) {
          // 说明该找到了，有这个值。
          // 更新好的数据 response.data 来 赋值给 this.unity[index],（更新了本地的状态数据）
          this.data.RItems[index] = response.data[0]
        }
        this.data.loading = false
        message.success('更新成功!')
      }
    },
    async delete(id: string) {
      try {
        await customApi.unityControllerDelete(id)
        // 更新本地 state 中的 unity 数据 -------------------------------------------
        const index = this.data.RItems.findIndex((item: any) => item.id === id)
        if (index !== -1) {
          this.data.RItems.splice(index, 1)
          // console.log("index:",index);
        }
        message.success('删除成功!')
      } catch (error) {
        message.error(`请求错误!:${error}`)
        console.error('Error updating data:', error)
        throw error
      }
    }
  }
})
