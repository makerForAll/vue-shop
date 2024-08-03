import customApi from '@/custom/api/core/custom-http-client' // 导入自定义 API 实例
import type { ApiResponse } from '@/custom/api/models/models-common'
import { message } from 'ant-design-vue'
// import { plainToInstance } from 'class-transformer';
// import {ReadPlanDTO} from 'dto-data';

class PlanService {
  async create(clientId: string, requestBody: any) {
    try {
      const response = await customApi.planControllerCreate(clientId, requestBody)
      const getResponseData = response.data as unknown as ApiResponse<any>
      // const data = plainToInstance(ReadPlanDTO, getResponseData.results.data);
      const data = getResponseData.results.data
      return data
    } catch (error) {
      message.error(`创建失败!:${error}`)
      console.error('创建失败:', error)
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
      // const data = plainToInstance(ReadPlanDTO, getResponseData.results.data);
      const data = getResponseData.results.data
      const total = getResponseData.results.total

      return { data, total }
    } catch (error) {
      message.error(`创建失败!:${error}`)
      console.error('创建失败:', error)
    }
  }
}

export default new PlanService()
