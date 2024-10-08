import customApi from '@/custom/api/core/custom-http-client'
import type { ApiResponse } from '@/0-manage-hub/services/common/models-common'
// import type { ReadClientDTO } from '@/generated/data-contracts';
import { message } from 'ant-design-vue'
// import type { CClientVO, RClientVO, UClientVO } from '@/services/vo/client'
import { convertDatesToDayjs } from '@/custom/tools/convertDates'
import type { CSoftwareVO, USoftwareVO } from './vo/software'
// import type { CPartyVO, RPartyVO, UPartyVO } from './vo/party'
// import type { CClientVO } from './vo/client'

class SoftwareService {
  async create(form: any) {
    try {
      const response = await customApi.softwareControllerCreate(form)
      const getResponseData = response.data as unknown as ApiResponse<CSoftwareVO>
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

      const response = await customApi.softwareControllerFindAll(requestParams)
      const getResponseData = response.data as unknown as ApiResponse<USoftwareVO>
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
      const response = await customApi.softwareControllerFindOne(id)
      const getResponseData = response.data as unknown as ApiResponse<USoftwareVO>
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
      const response = await customApi.softwareControllerUpdate(id, requestBody)
      const getResponseData = response.data as unknown as ApiResponse<USoftwareVO>
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

export default new SoftwareService()
