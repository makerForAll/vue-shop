// src/api/CustomApi.ts
import axiosInstance from '@/custom/api/core/axios-instance' // 引入自定义的 Axios 实例
import { Api } from '@/generated/Api' // 引入生成的 API 类
import type { ApiConfig } from '@/generated/http-client'

class CustomApi extends Api {
  constructor(apiConfig: ApiConfig = {}) {
    const config: ApiConfig = {
      ...apiConfig
      // 不需要添加 axios 属性，直接使用 axiosInstance
    }
    super(config) // 将配置对象传递给基类构造函数
    this.instance = axiosInstance // 直接将自定义的 Axios 实例赋值给 this.instance
  }

  // 在这里可以重写生成的 API 方法，或者添加新的方法
  async getUser(userId: string) {
    const response = await this.instance.get(`/users/${userId}`)
    return response.data
  }
}

export default new CustomApi() // 导出自定义 API 实例
