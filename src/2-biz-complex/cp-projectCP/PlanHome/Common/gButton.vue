<template>
  <ButtonSlotView
    :buttonStyle="{ color: 'green' }"
    :info="'创建分摊?请输入分摊密码'"
    :buttonName="'创建分摊'"
    :Confirm="handleConfirm"
  >
  </ButtonSlotView>
</template>

<script setup lang="ts">
import ButtonSlotView from '@/cp-v1/cp-GCP/Button/ButtonSlot.vue'
import type {
  CPaymentDetailItemVO,
  RPaymentDetailItemVO
} from '@/2-biz-complex/services/vo/paymentdetailitem'
import type { RPlanVO } from '@/2-biz-complex/services/vo/plan'
import { usePlanStore } from '@/stores/plan'
import message from 'ant-design-vue/es/message'
import { cloneDeep } from 'lodash'
import { shareAreaFun } from '../tool/shareArea/shareAreaCal'
import dayjs from 'dayjs'
import { useClientStore } from '@/stores'
import { paymentMainFun } from '../tool'

const props = defineProps<{
  planObj: RPlanVO
}>()

const planStore = usePlanStore()
const clientStore = useClientStore()

const handleConfirm = async (password: string) => {
  if (password === 'fentan') {
    // await planStore.delete(planStore.data.selectID as string);
    // await planStore.read();
    handleShareArea(props.planObj) // 使用从外部传入的 planObj
  } else {
    await message.error('密码错误，创建分摊失败')
  }
}

const handleShareArea = (obj: RPlanVO) => {
  // 创建分摊
  console.log('obj:', obj)
  // 先把当前的planObj 进行拷贝。
  // cloneDeep();-----------------------------
  const getObj = cloneDeep(obj) // ------  进行 深拷贝。之后 要把减免去掉重新计算 支付明细周期
  getObj.rent_free_months = 0
  // ----
  // 放入plan的基础数据，生成没有减免的 新的 支付明细的数据
  const { paymentDetails }: { paymentDetails: CPaymentDetailItemVO[] } = paymentMainFun(
    getObj as RPlanVO,
    '0'
  )
  // planStore.data.paymentAmountArr = paymentAmountArr;
  // 将没有减免条件情况下生成支付明细数据给 getObj
  getObj.payment_detail_items = paymentDetails as RPaymentDetailItemVO[] // 新明细周期
  // ----------------------------

  // 函数需要的值
  const paymentItems = getObj.payment_detail_items as RPaymentDetailItemVO[] // 新明细周期
  const amountArr = paymentItems.map((item) => item.amount)
  const increase_rate = obj.increase_rate as number // 旧 百分比
  const totalAmount = obj.total_amount as number // 旧 合同总金额
  const total_area = obj.total_area as number // 旧 总面积
  const payment_interval_months = obj.payment_interval_months as number
  // 计算出 需要变更的值
  const { average_price, initial_monthly_price, payment_detail_itemsAmount } = shareAreaFun(
    amountArr,
    increase_rate,
    totalAmount,
    total_area,
    payment_interval_months
  )

  // 开始处理对象
  delete getObj.id
  getObj.average_price = average_price
  getObj.first_price = average_price
  getObj.second_price = average_price
  getObj.third_price = average_price
  // delete getObj.second_price;
  // delete getObj.third_price;
  getObj.initial_monthly_price = initial_monthly_price
  // getObj.first_area = total_area;
  // getObj.first_name = ''; // 清空位置1名称
  // getObj.second_name = '';// 清空位置2名称
  // getObj.third_name = '';// 清空位置3名称
  // delete getObj.second_area;
  // delete getObj.third_area;

  getObj.name = dayjs().tz('Asia/Shanghai').format('YYYY/MM/DD HH:mm:ss') + '分摊后'
  getObj.payment_detail_items.forEach((item, index) => {
    if (index < payment_detail_itemsAmount.length) {
      delete item?.id
      item.amount = payment_detail_itemsAmount[index]
      item.remarks = ''
    }
  })
  getObj.total_amount = payment_detail_itemsAmount.reduce((sum, item) => sum + item, 0)
  // 将分摊好的值 进行创建plan
  console.log('getObj-----,', getObj)

  planStore.createPlanByClientId(clientStore.data.selectID, getObj)
}
</script>

<style scoped></style>
