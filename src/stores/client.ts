import { defineStore } from 'pinia'
import { message } from 'ant-design-vue'

// import { type Client, type APIParams,} from '@/api/services/';
import dayjs from 'dayjs'
// import type { Plan } from '@/api/services/plan';

// ------------------------------------------------------------
// import{ APIforBackEnd, ClientService, type ClientDTO} from '@/api'
// import {AxiosHttpRequest } from '@/api/core/AxiosHttpRequest';
// const api = new APIforBackEnd({},AxiosHttpRequest);
// ------------------------------------------------------------

import type { ApiResults, ApiResponse } from '@/custom/api/models/models-common'
// import type { FrontEndClientType } from '@/custom/client';

//------------------------------------------

// import type { AxiosResponse } from 'axios';

import customApi from '@/custom/api/core/custom-http-client' // 导入自定义 API 实例
import type { CreateClientDTO, ReadClientDTO, UpdateClientDTO } from '@/generated/data-contracts'
import clientService from '@/services/clientService'

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
  state: () => {
    // 可以写一些逻辑
    return {
      data: {
        CItem: {} as CreateClientDTO,
        UItem: {} as UpdateClientDTO,
        RItem: {} as ReadClientDTO,
        RItems: [] as ReadClientDTO[],
        total: 0,
        selectID: '', // 要更新的对象
        loading: false // store 的数据 (data)
      }
    }
  },
  getters: {
    // store 的计算属性 (computed)
    addTodayTime: (state) => (data: ClientDTO) => {
      // 在使用Create时，默认添加注册时间
      data.createdAt = dayjs() as unknown as string
    }
  },
  actions: {
    //actions 则是方法 (methods)
    // async calTotal(){
    //   this.createState.item.total = this.double;
    // },
    async updateSelectID(id: string) {
      this.data.selectID = id
    },
    async clearSelectID() {
      this.data.selectID = ''
    },
    async initStateItem() {
      try {
        const response = await customApi.clientControllerGetInit()
        const getResponseData = response.data as unknown as ApiResponse<ReadClientDTO>
        const item = getResponseData?.results.data[0]
        this.data.RItem = item
        // return
        console.log(
          'Init -- from BackEnd responseData:-----------',
          getResponseData?.results.data[0]
        )
        console.log('Init -- from FrontEnd Pinia State Data:-----------', this.data.RItem)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
      // this.clientData.items = response?.results?.data;
      // this.createState.item = initClientForm;
    },
    async create(data: any) {
      try {
        console.log('data:-----------', data)

        // await this.addTodayTime(data);
        const response = await customApi.clientControllerCreate(data)
        const getResponseData = response.data as unknown as ApiResponse<CreateClientDTO>
        // const createData:ApiResponse<ClientDTO> = await api.client.clientControllerCreate({requestBody:data});
        // api.client.clientControllerCreate();
        message.success('创建客户信息成功')
        // 更新本地 state 中的 party 数据 -------------------------------------------
        console.log('createData:', getResponseData)

        this.data.RItems.unshift(getResponseData.results.data[0])
      } catch (error) {
        message.error(`创建失败!:${error}`)
        console.error('创建失败:', error)
        throw error
      }
    },
    async read(
      params: any = {
        current: 1,
        pagesize: 10
      }
    ) {
      // 异步编程获取数据
      try {
        // const response = await customApi.clientControllerFindAll(params)

        // const getResponseData =response.data as unknown as ApiResponse<ReadClientDTO>;
        const response = await clientService.read(params)

        if (response) {
          this.data.RItems = response.data
          this.data.total = response.total as number

          console.log('data:', response)
          message.success('获取信息成功')
          // return data;
        }
      } catch (error) {
        message.error(`请求错误!:${error}`)
        console.error('Error fetching data:', error)
        throw error
      }
    },
    // async read(params:any= {
    //  current: 1,
    //  pagesize: 10,

    // }) { // 异步编程获取数据
    //   try {
    //     const response:ApiResponse<ClientDTO> = await api.client.clientControllerFindAll(params);
    //     // const data = await readClientAPI(params);
    //     this.data.items = response.results.data;
    //     this.data.total = response.results.total as number;
    //     // this.readStateData = data;
    //     console.log("data:",response.results.data);
    //     message.success("获取信息成功")
    //     // return data;
    //   } catch (error) {
    //     message.error(`请求错误!:${error}`);
    //     console.error("Error fetching data:", error);
    //     throw error;
    //   }
    // },
    async readById(id: string): Promise<ReadClientDTO> {
      // this.loading = true;
      try {
        const response = await customApi.clientControllerFindOne(id)
        const getResponseData = response.data as unknown as ApiResponse<ReadClientDTO>
        // const response: ApiResponse<ClientDTO> = await api.client.clientControllerFindOne({id});
        const item = getResponseData.results.data[0]
        this.data.UItem = item
        console.log('readById return data--------', item)
        // ------------------------------
        return item
      } catch (error) {
        // this.error = error.message;
        return {} as ReadClientDTO
      } finally {
        // this.loading = false;
      }
    },
    async update(id: string, requestBody: any) {
      try {
        //  向服务器 提出 put更新请求，响应 更新结果
        const response = await customApi.clientControllerUpdate(id, requestBody)
        const getResponseData = response.data as unknown as ApiResponse<ReadClientDTO>
        const item = getResponseData.results.data[0]
        // 向服务器 提出 get 获取指定ID对象 请求， 响应 获取结果
        // const updateData = await this.readById(id);
        const index = this.data.RItems.findIndex((item: any) => item.id === id)
        if (index !== -1) {
          // 说明该找到了，有这个值。
          // 更新好的数据 response.data 来 赋值给 this.party[index],（更新了本地的状态数据）
          this.data.RItems[index] = item
        }
        message.success('更新成功!')
      } catch (error) {
        message.error(`请求错误!:${error}`)
        console.error('Error updating data:', error)
        throw error
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
    }
  }
})
