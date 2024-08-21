import customApi from '@/custom/api/core/custom-http-client'
import type { ApiResponse } from '@/services/vo/models-common'
import { message } from 'ant-design-vue'
import { convertDatesToDayjs } from '@/custom/tools/convertDates'
import type { CUnityVO, RUnityVO, UUnityVO } from './vo/unity'

class UnityService {
  async create(form: any) {
    try {
      const response = await customApi.unityControllerCreate(form)
      const getResponseData = response.data as unknown as ApiResponse<CUnityVO>
      if (Array.isArray(getResponseData.results.data)) {
        const data = convertDatesToDayjs(getResponseData.results.data)
        return { data }
      }
    } catch (error: any) {
      console.log('error-!!', error)
      if (error.code === 400 && Array.isArray(error.message)) {
        error.message.forEach((err: { property: any; constraints: any }) => {
          const field = err.property // 获取验证失败的字段名
          const constraints = err.constraints // 获取验证失败的详细信息

          // 输出错误信息
          console.error(`Field: ${field}`)
          Object.values(constraints).forEach((msg) => {
            console.error(`Error: ${msg}`)
          })
        })
      } else {
        console.error('Unexpected Error:', error)
      }
    }
  }

  async read(
    params: any = {
      current: 1,
      pagesize: 10
    },
    filters: any = {}
  ) {
    try {
      // 合并 params 和 filters
      const requestParams = { ...params, ...filters }

      const response = await customApi.unityControllerFindAll(requestParams)
      const getResponseData = response.data as unknown as ApiResponse<RUnityVO>
      if (Array.isArray(getResponseData.results.data)) {
        const data = convertDatesToDayjs(getResponseData.results.data)
        const total = getResponseData.results.total
        return { data, total }
      }
    } catch (error) {
      message.error(`创建失败!:${error}`)
      console.error('创建失败:', error)
    }
  }

  async readById(id: string) {
    try {
      const response = await customApi.unityControllerFindOne(id)
      const getResponseData = response.data as unknown as ApiResponse<RUnityVO>
      if (Array.isArray(getResponseData.results.data)) {
        // const data = plainToInstance(RClientVOC, getResponseData.results.data)
        const data = convertDatesToDayjs(getResponseData.results.data)
        const total = getResponseData.results.total
        return { data, total }
      }
    } catch (error) {
      message.error(`创建失败!:${error}`)
      console.error('创建失败:', error)
    }
  }

  async update(id: string, requestBody: any) {
    try {
      const response = await customApi.unityControllerUpdate(id, requestBody)
      const getResponseData = response.data as unknown as ApiResponse<UUnityVO>
      if (Array.isArray(getResponseData.results.data)) {
        // const data = plainToInstance(UClientVOC, getResponseData.results.data)
        const data = convertDatesToDayjs(getResponseData.results.data)
        const total = getResponseData.results.total
        return { data, total }
      }
    } catch (error) {
      message.error(`创建失败!:${error}`)
      console.error('创建失败:', error)
    }
  }
}

export default new UnityService()
