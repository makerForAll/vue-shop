import customApi from '@/custom/api/core/custom-http-client' // 导入自定义 API 实例
import { convertDatesToDayjs } from '@/custom/tools/convertDates'
// import type { ApiResponse } from '@/custom/api/models/models-common'
// import type { ApiResponse } from '@/custom/api/models/models-common'
import type { ApiResponse } from '@/0-manage-hub/services/common/models-common'
import { message } from 'ant-design-vue'
import type { RClientVO, UClientVO } from './vo/client'
import type { CPlanVO } from './vo/plan'
// import { plainToInstance } from 'class-transformer';
// import {ReadPlanDTO} from 'dto-data';

class PlanService {
  async init() {
    try {
      const response = await customApi.planControllerGetInit()
      const getResponseData = response.data as unknown as ApiResponse<CPlanVO>
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
    }
  ) {
    try {
      const response = await customApi.planControllerFindAll(params)
      const getResponseData = response.data as unknown as ApiResponse<any>
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
      const response = await customApi.planControllerFindOne(id)
      const getResponseData = response.data as unknown as ApiResponse<RClientVO>
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
      const response = await customApi.planControllerUpdate(id, requestBody)
      const getResponseData = response.data as unknown as ApiResponse<UClientVO>
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

  async delete(id: string) {
    try {
      await customApi.planControllerDelete(id)
    } catch (error) {
      message.error(`创建失败!:${error}`)
      console.error('创建失败:', error)
    }
  }
  // --------------
  async createPlanByClientId(clientId: string, requestBody: any) {
    try {
      const response = await customApi.planControllerCreatePlanByClientId(clientId, requestBody)
      const getResponseData = response.data as unknown as ApiResponse<any>
      if (Array.isArray(getResponseData.results.data)) {
        const data = convertDatesToDayjs(getResponseData.results.data)
        return { data }
      }
    } catch (error) {
      message.error(`创建失败!:${error}`)
      console.error('创建失败:', error)
    }
  }

  async readPlanByClientId(clientId: string, query: any) {
    try {
      const response = await customApi.planControllerFindPlanByClientId({ clientId, ...query })
      const getResponseData = response.data as unknown as ApiResponse<RClientVO>
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

  async readPlanByPartySoftwareId(partysoftwareId: string, query: any) {
    try {
      const response = await customApi.planControllerFindPlanByPartysoftwareId({
        partysoftwareId,
        ...query
      })
      const getResponseData = response.data as unknown as ApiResponse<RClientVO>
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
}

export default new PlanService()
