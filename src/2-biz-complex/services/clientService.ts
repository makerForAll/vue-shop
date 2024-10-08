import customApi from '@/custom/api/core/custom-http-client'
import type { ApiResponse } from '@/0-manage-hub/services/common/models-common'
// import type { ReadClientDTO } from '@/generated/data-contracts';
import { message } from 'ant-design-vue'
// import { plainToInstance } from 'class-transformer';
// import { CreateClientDTO } from './client_create.dto'
// import { CreateClientDTO } from './client_test.dto'
// import { plainToInstance } from 'class-transformer'
import type { CClientVO, RClientVO, UClientVO } from '@/2-biz-complex/services/vo/client'
import { convertDatesToDayjs } from '@/custom/tools/convertDates'
// import { plainToInstance } from 'class-transformer';
// import { CClientVOC, RClientVOC, UClientVOC } from './voc/client'

class ClientService {
  // async create(form: any) {
  //   try {
  //     const response = await customApi.clientControllerCreate(form)
  //     const getResponseData = response.data as unknown as ApiResponse<CClientVO>
  //     if (Array.isArray(getResponseData.results.data)) {
  //       const data = convertDatesToDayjs(getResponseData.results.data)
  //       return { data }
  //     }
  //   } catch (error: any) {
  //     console.log('error-!!', error)
  //     if (error.code === 400 && Array.isArray(error.message)) {
  //       error.message.forEach((err: { property: any; constraints: any }) => {
  //         const field = err.property // 获取验证失败的字段名
  //         const constraints = err.constraints // 获取验证失败的详细信息

  //         // 输出错误信息
  //         console.error(`Field: ${field}`)
  //         Object.values(constraints).forEach((msg) => {
  //           console.error(`Error: ${msg}`)
  //         })
  //       })
  //     } else {
  //       console.error('Unexpected Error:', error)
  //     }
  //   }
  // }

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

      const response = await customApi.clientControllerFindAll(requestParams)

      const getResponseData = response.data as unknown as ApiResponse<RClientVO>
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
      const response = await customApi.clientControllerFindOne(id)
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
      const response = await customApi.clientControllerUpdate(id, requestBody)
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

  // --------------------------------------------------------------
  async readObjsByFieldId(
    fieldId: string,
    params: any = {
      current: 1,
      pagesize: 10
    },
    filters: any = {}
  ) {
    // console.log('response----service---------', fieldId)
    try {
      // 合并 params 和 filters
      const requestParams = { ...params, ...filters }
      // console.log('response------##-------', fieldId)
      const response = await customApi.clientControllerFindObjsByField({
        partysoftwareId: fieldId,
        ...requestParams
      })

      const getResponseData = response.data as unknown as ApiResponse<RClientVO>
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

  async createObjByFieldId(fieldId: string, form: any) {
    try {
      const response = await customApi.clientControllerCreateObjByField(fieldId, form)
      const getResponseData = response.data as unknown as ApiResponse<CClientVO>
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
}

export default new ClientService()
