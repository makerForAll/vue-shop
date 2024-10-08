// import axios from '@/utils/request';
import { defineStore } from 'pinia'
import { message } from 'ant-design-vue'

import type { ApiResponse, ApiResults } from '@/0-manage-hub/services/common/models-common'

import customApi from '@/custom/api/core/custom-http-client' // 导入自定义 API 实例
// import type { CreatePlanDTO, ReadPlanDTO, UpdatePlanDTO } from '@/generated/data-contracts'

import PlanService from '@/2-biz-complex/services/planService'
// import clientService from '@/services/clientService'
// import planService from '@/2-biz-complex/'
import type { RPlanVO, CPlanVO, UPlanVO } from '@/2-biz-complex/services/vo/plan'
import type {
  CPaymentDetailItemVO,
  RPaymentDetailItemVO
} from '@/2-biz-complex/services/vo/paymentdetailitem'
import dayjs from 'dayjs'
import { limitDecimalPlaces } from '@/2-biz-complex/cp-projectCP/PlanHome/tool/helpersFun-dayjs'
import planService from '@/2-biz-complex/services/planService'
import type { RPaymentPlanSplitVO } from '@/2-biz-complex/services/vo/paymentplansplit'
// import { update } from 'lodash'
import paymentplansplit from '@/2-biz-complex/services/paymentplansplit'
// import { cloneDeep } from 'lodash'

export const usePlanStore = defineStore('plan', {
  // 其他配置...
  state: () => {
    return {
      data: {
        CItem: {} as CPlanVO,
        UItem: {} as UPlanVO,
        RItem: {} as RPlanVO,
        RItems: [] as RPlanVO[],
        CUItem: {} as CPlanVO | UPlanVO,
        total: 0,
        selectName: '', // 乙方名称
        selectID: '', // 要更新的对象
        loading: false, // store 的数据 (data)
        paymentAmountArr: [] as number[],
        loadingForTable: false,
        unityItems: [] as any[]
      }
    }
  }, // store 的数据 (data)

  getters: {
    // store 的计算属性 (computed)
    calAreaAndPriceC(): number[] {
      const total_area =
        Number(this.data.CItem.first_area || 0) +
        Number(this.data.CItem.second_area || 0) +
        Number(this.data.CItem.third_area || 0)
      const total_price =
        Number(this.data.CItem.first_price || 0) * Number(this.data.CItem.first_area || 0) +
        Number(this.data.CItem.second_price || 0) * Number(this.data.CItem.second_area || 0) +
        Number(this.data.CItem.third_price || 0) * Number(this.data.CItem.third_area || 0)
      return [
        this.calRound(total_area),
        this.calRound(total_price / total_area),
        this.calRound(total_price)
      ]
    },
    calAreaAndPriceU(): number[] {
      const total_area =
        Number(this.data.CUItem.first_area || 0) +
        Number(this.data.CUItem.second_area || 0) +
        Number(this.data.CUItem.third_area || 0)
      const total_price =
        Number(this.data.CUItem.first_price || 0) * Number(this.data.CUItem.first_area || 0) +
        Number(this.data.CUItem.second_price || 0) * Number(this.data.CUItem.second_area || 0) +
        Number(this.data.CUItem.third_price || 0) * Number(this.data.CUItem.third_area || 0)
      return [
        this.calRound(total_area),
        this.calRound(total_price / total_area),
        this.calRound(total_price)
      ]
    },
    totalCal: (state) => {
      return (num: number) => {
        return num + 1
      }
    },
    calRound() {
      return (num: number) => {
        return Math.round(num * 100) / 100
      }
    },
    formatCurrency:
      () =>
      (amount: number): string => {
        return new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(amount)
      },
    sortedPaymentItems: (state) => {
      // 以period_start 为准，排序所有数据
      return (paymentItems: CPaymentDetailItemVO[]) => {
        return paymentItems.sort((a, b) => {
          return dayjs(a.period_start).isBefore(dayjs(b.period_start)) ? -1 : 1
        })
      }
    }
  },
  actions: {
    async getObjIndex(paymentId: string) {
      console.log('myID:', paymentId)
      const payments = this.data?.RItems[0]?.payment_detail_items as RPaymentDetailItemVO[]
      const index = payments.findIndex((item: RPaymentDetailItemVO) => item.id === paymentId)
      console.log('getindex:', index)
      return { index }
    },
    async updatePaymentPlanSplit(index: number, item: RPaymentPlanSplitVO) {
      if (index !== -1) {
        // const getArr = this.data.RItems[0].payment_detail_items[index]
        //   .payment_plan_splits as unknown as RPaymentPlanSplitVO[]
        this.data.RItems[0].payment_detail_items[index].payment_plan_splits.push(item)
      }
    },
    async deletePaymentPlanSplit(
      obj: RPaymentPlanSplitVO,
      splitIndex: number,
      paymentIndex: number
    ) {
      // 需要 paymentItem 的 index
      // 需要 split 的 index

      paymentplansplit.delete(obj?.id as string).then(() => {
        message.success('删除成功')
        this.data.RItems[0].payment_detail_items[paymentIndex].payment_plan_splits.splice(
          splitIndex,
          1
        )
      })
      // message.success('删除成功')
    },
    async updateSelectID(id: string, name: string, obj: RPlanVO) {
      this.data.selectID = id
      this.data.selectName = name
      this.data.RItem = obj
    },
    // async clearSelectID() {
    //   this.data.selectID = ''
    // },
    switchToggleChangeForTable() {
      this.data.loadingForTable = !this.data.loadingForTable ? true : false
    },
    // async changType(){
    //   const item =  this.data.item as PlanDTO;
    //   // console.log("changeType1:", item.startdate_and_enddate?.map((item:any) => dayjs(item)));
    //   const changedData = item.startdate_and_enddate?.map((item:any) => dayjs(item))
    //   // this.data.item = {...this.data.item,startdate_and_enddate:changedData};
    //   // console.log("changeType2:", changedData[0]);
    //     return changedData;
    //   },
    calculateTotalAmount(arrValue: CPaymentDetailItemVO[]) {
      // const getArr = cloneDeep(arrValue)
      // const totalAmount = getArr.reduce((sum, current) => {
      //   return sum + current.amount
      // }, 0)
      // console.log('totalAmount,', totalAmount)

      let sum = 0
      for (let i = 0; i < arrValue.length; i++) {
        console.log('amount,', arrValue[i].amount)
        sum += Number(arrValue[i].amount)
        console.log('intermediate sum,', sum) // 打印每一步的累加结果
      }
      // console.log('totalAmount,', totalAmount)
      console.log('totalAmount,', sum)
      // 根据 type 类型决定赋值给哪个变量
      this.data.CUItem.total_amount = limitDecimalPlaces(sum, 2)
      // if (type === 'create') {
      //   this.data.CItem.total_amount = limitDecimalPlaces(sum, 2)
      // } else if (type === 'update') {
      //   this.data.UItem.total_amount = limitDecimalPlaces(sum, 2)
      //   // this.data.UItem.total_amount = sum
      // }
    },
    async runCal() {
      // if (type == 'create') {
      //   this.data.CUItem.total_area = this.calAreaAndPriceC[0]
      //   this.data.CUItem.average_price = this.calAreaAndPriceC[1]
      //   this.data.CUItem.initial_monthly_price = this.calAreaAndPriceC[2]
      // }
      // if (type == 'update') {
      //   this.data.CUItem.total_area = this.calAreaAndPriceU[0]
      //   this.data.CUItem.average_price = this.calAreaAndPriceU[1]
      //   this.data.CUItem.initial_monthly_price = this.calAreaAndPriceU[2]
      // }
      if (this.calAreaAndPriceU[0] && this.calAreaAndPriceU[1] && this.calAreaAndPriceU[2]) {
        this.data.CUItem.total_area = this.calAreaAndPriceU[0]
        this.data.CUItem.average_price = this.calAreaAndPriceU[1]
        this.data.CUItem.initial_monthly_price = this.calAreaAndPriceU[2]
      }
    },
    // async initState(){
    //   const response:ApiResponse<PlanDTO> = api.plan.planControllerGetInit() as any;
    //   this.data.item = response.results.data[0];
    // },
    async initkong() {
      // this.data.CUItem = {}
      Object.assign(this.data.CUItem, {})
    },

    async init() {
      this.data.loading = true
      const response = (await planService.init()) as ApiResults<any>
      console.log('response,', response)

      if (response) {
        this.data.CItem = response.data[0]
        // 更新本地 state 中的 unity 数据 -------------------------------------------

        // this.data.RItems.unshift(response.data[0])
        this.data.loading = false
        message.success('方案init成功')
        // this.read()
      }
    },
    async initState() {
      const response = await customApi.planControllerGetInit()
      const getResponseData = response.data as unknown as ApiResponse<CPlanVO>
      const results = getResponseData.results
      if (response && getResponseData.results) {
        const item: CPlanVO = results.data[0]
        this.data.CUItem = item
      }
      // this.data.item = myapi.plan.planControllerGetInit();
    },
    async read(
      params: any = {
        current: 1,
        pagesize: 10
      }
    ) {
      this.data.loading = true
      const response = await PlanService.read(params)
      if (response) {
        this.data.RItems = response?.data as RPlanVO[]
        this.data.total = response?.total as number
        // this.readStateData = data;
        // console.log('data:', response)
        this.data.loading = false
        message.success('获取信息成功')
      }
    },

    async readById(id: string): Promise<RPlanVO> {
      this.data.loading = true
      const response = (await planService.readById(id)) as ApiResults<any>
      if (response) {
        this.data.UItem = response.data[0]
        this.data.UItem = response.data[0]
        this.data.loading = false
      }
      return response?.data[0]
    },

    async update(id: string, requestBody: any) {
      this.data.loading = true
      console.log('requestBody^', requestBody)
      const response = (await planService.update(id, requestBody)) as ApiResults<any>
      if (response) {
        const item = response.data[0]
        console.log('item^', item)

        const index = this.data.RItems.findIndex((item: any) => item.id === id)
        if (index !== -1) {
          // 说明该找到了，有这个值。
          // 更新好的数据 response.data 来 赋值给 this.party[index],（更新了本地的状态数据）
          this.data.RItems[index] = item
        }
        this.data.loading = false
        message.success('更新成功!')
      }
    },
    async updateForpayment(
      id: string,
      requestBody: CPlanVO,
      obj: RPaymentDetailItemVO,
      addItem: RPaymentPlanSplitVO
    ) {
      this.data.loading = true
      const { index } = await this.getObjIndex(obj.id as string)
      if (index !== -1) {
        requestBody.payment_detail_items[index]?.payment_plan_splits.push(addItem)
      }
      const response = (await planService.update(id, requestBody)) as ApiResults<any>
      if (response) {
        const item = response.data[0]
        console.log('item---------------------------^', item)

        const index = this.data.RItems.findIndex((item: any) => item.id === id)
        if (index !== -1) {
          // 说明该找到了，有这个值。
          // 更新好的数据 response.data 来 赋值给 this.party[index],（更新了本地的状态数据）
          this.data.CUItem = item
          this.data.RItems[index] = item
        }
        this.data.loading = false
        message.success('更新成功!')
      }
    },

    async delete(id: string) {
      const response = await planService.delete(id)
      // 更新本地 state 中的 party 数据 -------------------------------------------
      const index = this.data.RItems.findIndex((item: RPlanVO) => item.id === id)
      if (index !== -1) {
        this.data.RItems.splice(index, 1)
        message.success('删除成功!')
      }
    },
    async clearSelectID() {
      this.data.selectID = ''
    },
    // --------------------------------------------------------------------------------------
    async createPlanByClientId(clientId: string, requestBody: any) {
      // /**默认值
      //  * @type {*} */
      // const defaultData = { tags: 1 }
      // const finalRequestBody = { ...defaultData, ...requestBody }
      this.data.loading = true
      const response = (await planService.createPlanByClientId(
        clientId,
        requestBody
      )) as ApiResults<any>
      if (response) {
        console.log('response--,', response)

        this.data.RItems.unshift(response?.data[0])
        this.data.total = this.totalCal(this.data?.total as number) // 更新total
        this.data.loading = false
        message.success('创建客户信息成功')
      }
      // await this.changeFormat();

      // 更新本地 state 中的 party 数据 -------------------------------------------
      // this.readStateData.push(createData);

      // this.readState.total = this.readState.total + 1;
    },
    async readByClientId(
      clientId: string,
      params: any = {
        current: 1,
        pagesize: 10
      }
    ): Promise<any> {
      this.data.loading = true
      const response = (await planService.readPlanByClientId(
        clientId,
        params
      )) as ApiResults<RPlanVO>
      // const getResponseData = response.data as unknown as ApiResponse<ReadPlanDTO>
      if (response) {
        // 调整paymentItem中的排序
        response?.data[0]?.payment_detail_items?.sort((a: any, b: any) => {
          if (a.period_start?.isBefore(b.period_start)) return -1
          if (a.period_start?.isAfter(b.period_start)) return 1
          return 0
        })
        this.data.RItems = response?.data
        this.data.total = response?.total as number
      }
      console.log('readByClientId--------', response?.data)
      this.data.loading = false
      return response?.data
    },

    async readByPartySoftwareId(
      partysoftwareId: string,
      params: any = {
        current: 1,
        pagesize: 10
      }
    ): Promise<any> {
      this.data.loading = true
      const response = (await planService.readPlanByPartySoftwareId(
        partysoftwareId,
        params
      )) as ApiResults<RPlanVO>
      // const getResponseData = response.data as unknown as ApiResponse<ReadPlanDTO>
      if (response) {
        // 调整paymentItem中的排序
        response?.data[0]?.payment_detail_items?.sort((a: any, b: any) => {
          if (a.period_start?.isBefore(b.period_start)) return -1
          if (a.period_start?.isAfter(b.period_start)) return 1
          return 0
        })
        this.data.RItems = response?.data
        this.data.total = response?.total as number
      }
      console.log('readByClientId--------', response?.data)
      this.data.loading = false
      return response?.data
    }
  }
  // -------------------------------
})
