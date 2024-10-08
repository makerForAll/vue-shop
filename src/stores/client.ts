import { defineStore } from 'pinia'
import { message } from 'ant-design-vue'
import dayjs from 'dayjs'
// ------------------------------
import type { ApiResults } from '@/0-manage-hub/services/common/models-common'
import type { CClientVO, RClientVO, UClientVO } from '@/2-biz-complex/services/vo/client'
//------------------------------------------

import clientService from '@/2-biz-complex/services/clientService'

import customApi from '@/custom/api/core/custom-http-client' // 导入自定义 API 实例

// import type { CreateClientDTO, ReadClientDTO, UpdateClientDTO } from '@/generated/data-contracts'

// 使用自定义 HttpClient 实例创建 API 客户端
// const myApi = new Api({}); // 确保类型安全

// 使用自定义 HttpClient 实例创建 API 客户端
// const api = new Api({});
// const myApi = new Api({ instance: httpClient.instance });
// ------------------------------------------------------------
// 初始化
// export const initClientForm = {
//   name: '',
//   contact:'',
//   phonenumber: '',
//   emergencycontact: '',
//   emergencycontactphone: '',
//   marks:'',
//   createdAt:null,
//   // 其他字段可以按需添加
// }

export const useClientStore = defineStore('client', {
  // 其他配置...
  // persist: true,
  state: () => {
    // 可以写一些逻辑
    return {
      data: {
        tabsKey: 0 as number,
        HItem: {} as any,
        CItem: {} as CClientVO,
        UItem: {} as UClientVO,
        RItem: {} as RClientVO,
        RItems: [] as RClientVO[],
        total: 0,
        // Aitem: {} as RClientVO,
        selectName: '',
        selectID: '', // 要更新的对象
        loading: false // store 的数据 (data)
      }
    }
  },
  getters: {
    // store 的计算属性 (computed)
    addTodayTime: (state) => (data: any) => {
      // 在使用Create时，默认添加注册时间
      data.createdAt = dayjs() as unknown as string
    },
    formatCreatedAt: (state) => {
      return (date: dayjs.Dayjs | null) =>
        date ? date.tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss') : 'N/A'
    },
    getKeyToState: (state) => {
      return (data: number) => (state.data.tabsKey = data)
    }
    // getInit: (state) => {
    //   return () => {
    //     // 完整的初始化对象，确保包含所有必需的字段
    //     const defaultValue: CClientVO = {
    //       createdAt: dayjs(), // 假设 `createdAt` 是 `Dayjs` 类型
    //       tags: 0,
    //       name: '',
    //       contact: '',
    //       phonenumber: '',
    //       partySoftware: undefined
    //     }
    //     state.data.CItem = defaultValue
    //   }
    // }
  },
  actions: {
    //actions 则是方法 (methods)
    // async calTotal(){
    //   this.createState.item.total = this.double;
    // },
    async updateSelectID(id: string, name: string, obj: RClientVO) {
      this.data.selectID = id
      this.data.selectName = name
      this.data.RItem = obj
    },
    async clearSelectID() {
      this.data.selectID = ''
    },
    // async initStateItem() {
    //   try {
    //     const response = await customApi.clientControllerGetInit()
    //     const getResponseData = response.data as unknown as ApiResponse<RClientVO>
    //     const item = getResponseData?.results.data[0]
    //     this.data.CItem = item
    //     // return
    //     console.log(
    //       'Init -- from BackEnd responseData:-----------',
    //       getResponseData?.results.data[0]
    //     )
    //     console.log('Init -- from FrontEnd Pinia State Data:-----------', this.data.CItem)
    //   } catch (error) {
    //     console.error('Error fetching data:', error)
    //   }
    //   // this.clientData.items = response?.results?.data;
    //   // this.createState.item = initClientForm;
    // },
    // async create(data: any) {
    //   this.data.loading = true
    //   const response = (await clientService.create(data)) as ApiResults<RClientVO>
    //   // const response = (await customApi.clientControllerCreate(data)) as ApiResults<CClientVO>
    //   console.log('response,', response)

    //   if (response) {
    //     this.data.CItem = response.data[0]
    //     // 更新本地 state 中的 party 数据 -------------------------------------------
    //     this.data.RItems.unshift(response.data[0])
    //     this.data.loading = false
    //     message.success('创建客户信息成功')
    //     // this.read()
    //   }
    // },

    async read(
      params: any = {
        current: 1,
        pagesize: 10
      },
      filters: any = {}
    ): Promise<RClientVO[]> {
      this.data.loading = true
      // 异步编程获取数据
      const response = (await clientService.read(params, filters)) as ApiResults<RClientVO>
      if (response) {
        this.data.RItems = response.data as RClientVO[]
        this.data.total = response.total as number
        this.data.loading = false
        message.success('获取信息成功')
      }
      return response?.data
    },
    async readById(id: string): Promise<RClientVO> {
      //它有很多使用场景，所以在缓存时，就无法唯一放在1个地方。
      this.data.loading = true
      const response = (await clientService.readById(id)) as ApiResults<RClientVO>
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
      const response = (await clientService.update(id, requestBody)) as ApiResults<UClientVO>
      if (response) {
        this.data.UItem = response.data[0]
        // 更新本地缓存
        const index = this.data.RItems.findIndex((item: any) => item.id === id)
        if (index !== -1) {
          // 说明该找到了，有这个值。
          // 更新好的数据 response.data 来 赋值给 this.party[index],（更新了本地的状态数据）
          this.data.RItems[index] = response.data[0]
        }
        this.data.loading = false
        message.success('更新成功!')
      }
    },
    async delete(id: string) {
      try {
        await customApi.clientControllerDelete(id)
        // 更新本地 state 中的 party 数据 -------------------------------------------
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
    },

    // ----------------------------------------------------------
    async readClientsByFieldId(
      fieldId: string,
      params: any = {
        current: 1,
        pagesize: 10
      },
      filters: any = {}
    ): Promise<RClientVO[]> {
      this.data.loading = true
      // 异步编程获取数据
      const response = (await clientService.readObjsByFieldId(
        fieldId,
        params,
        filters
      )) as ApiResults<RClientVO>
      // console.log('response-----------store pinia--', fieldId, response)
      if (response) {
        this.data.RItems = response.data as RClientVO[]
        this.data.total = response.total as number
        this.data.loading = false
        message.success('获取信息成功')
      }
      return response?.data
    },
    async createClientByFieldId(fieldId: string, data: any) {
      this.data.loading = true
      const response = (await clientService.createObjByFieldId(
        fieldId,
        data
      )) as ApiResults<RClientVO>
      // const response = (await customApi.clientControllerCreate(data)) as ApiResults<CClientVO>
      console.log('response,', response)

      if (response) {
        this.data.CItem = response.data[0]
        // 更新本地 state 中的 party 数据 -------------------------------------------

        this.data.RItems.unshift(response.data[0])
        this.data.loading = false
        message.success('创建客户信息成功')
        // this.read()
      }
    }
  }
})
