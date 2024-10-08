<template>
  <DrawerSlotView
    :width="1250"
    :action="props.action"
    :entityType="props.entityType"
    v-model="planStore.data.CUItem"
    :fields="planFields"
    :rules="rules"
    @handleSubmit="handleSubmit"
    @fieldChange="fieldChange"
    @showDrawer="showDrawer"
    @close-drawer="closeDrawer"
  >
    <template #head-form>
      <a-dropdown>
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <!-- <a-menu-item key="1" @click="generatePaymentDetails"> 生成 - 支付明细【精度：个位】</a-menu-item> -->
            <!-- <a-menu-item key="3" @click="generatePaymentDetails2">生成 - 支付明细【精度：小数点后2位】</a-menu-item> -->
            <a-menu-item key="2" @click="generateTotalAmount">2根据明细 - 计算总金额</a-menu-item>
          </a-menu>
        </template>
        <a-button>
          支付明细-相关操作
          <DownOutlined />
        </a-button>
      </a-dropdown>
    </template>
    <template #calPaymentSplit>
      <a-button>计算支付明细</a-button>
    </template>
  </DrawerSlotView>
</template>

<script setup lang="ts">
// import type { Plan } from '@/api/services/plan';
import DrawerSlotView from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue'
// import { useClientStore } from '@/stores/client';
import { usePlanStore } from '@/stores/plan'
import type { Rule } from 'ant-design-vue/es/form'
import { computed, onMounted, reactive, ref, toRaw, type UnwrapRef } from 'vue'
import type { Field } from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue'
import type { CPlanVO, RPlanVO } from '@/2-biz-complex/services/vo/plan'
// import { paymentMainFun } from '../../../';
import type {
  CPaymentDetailItemVO,
  RPaymentDetailItemVO
} from '@/2-biz-complex/services/vo/paymentdetailitem'

import { DownOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'
import { usePartySoftwareStore } from '@/stores/partysoftware'
const options_objArr = ref<any[]>([]) // options_str 作为字符串存储选项
const handleMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}

const props = defineProps<{
  action: string
  entityType: string
  // partysoftwareId: string
}>()

// const props = defineProps({
//   partysoftwareId: {
//     type: String,
//     default: ''
//   }
// })
const innerColumns = [
  { title: '期数', dataIndex: 'index', key: 'index', width: '5%', className: 'innerc' },
  {
    title: '期间开始',
    dataIndex: 'period_start',
    key: 'beginDate',
    width: '12%',
    className: 'innerc'
  },
  { title: '期间结束', dataIndex: 'period_end', key: 'endDate', width: '15%', className: 'innerc' },
  { title: '应收金额', dataIndex: 'amount', key: 'amount', width: '20%', className: 'innerc' },
  { title: '备注', dataIndex: 'remarks', key: 'remarks', width: '18%' },
  { title: '操作', key: 'operation', width: '80px', className: 'operation' }
]
const inner2Columns = [
  { title: '分段', dataIndex: 'index', key: 'index', width: '80px', fixed: 'left' },
  { title: '期间开始', dataIndex: 'period_start', key: 'period_start', width: '150px' },
  { title: '期间结束', dataIndex: 'period_end', key: 'period_end', width: '150px' },
  { title: '实收金额', dataIndex: 'payment_amount', key: 'payment_amount', width: '150px' },
  { title: '押金抵扣', dataIndex: 'deposit_deduction', key: 'deposit_deduction', width: '150px' },
  { title: '押金余额', dataIndex: 'deposit_balance', key: 'deposit_balance', width: '150px' },
  { title: '支付截止日期', dataIndex: 'payment_date', key: 'payment_date', width: '150px' },
  {
    title: '操作日期',
    dataIndex: 'operation_date',
    key: 'operation_date',
    width: '150px',
    disable: true
  },
  { title: '备注', dataIndex: 'remarks', key: 'remarks', width: '200px' },
  { title: '依据链接', dataIndex: 'link', key: 'link', width: '80px', className: 'innerc2-link' },
  {
    title: '状态',
    dataIndex: 'state',
    key: 'state',
    width: '180px',
    fixed: 'right',
    options: [
      { value: 0, label: '未到时间' },
      { value: 1, label: '已支付' },
      { value: 2, label: '已过期' }
    ]
  },
  { title: '操作', key: 'operation', width: '160px', className: 'operation', fixed: 'right' }
]

// ------------
// const clickBt = () => {
//     console.log('clickBt')
// }
// -----------

const planFields = computed(
  () =>
    [
      {
        name: 'payment_detail_items',
        component: 'table-test',
        functool: {
          add: async (obj: RPaymentDetailItemVO) => {
            console.log(toRaw(obj))
            const { index } = await planStore.getObjIndex(obj.id as string)
            // 我要添加的 item值
            const split: RPaymentPlanSplitVO = {
              index: 1,
              period_start: planStore.data.CUItem.payment_detail_items[index].period_start,
              period_end: planStore.data.CUItem.payment_detail_items[index].period_end,
              payment_amount: planStore.data.CUItem.payment_detail_items[index].amount,
              remarks: '',
              state: 0,
              payment_date: planStore.data.CUItem.payment_detail_items[index].due_date,
              referencelink: '',
              operation_date: dayjs()
            }
            planStore.updatePaymentPlanSplit(index, split)
            // planStore.data.RItems.push(obj)
            // planStore.data.RItems
            // planStore.data.
          } // 定义 add 函数
          // delete: async (obj: RPaymentDetailItemVO) => {
          //     const { index } = await planStore.getObjIndex(obj.id as string);
          //     planStore.deletePaymentPlanSplit(index, obj.id as string);
          // }
        },
        columns: innerColumns,
        innercolumns: inner2Columns,
        props: { disabled: true, placeholder: 'Enter remarks' }
      },
      { name: '基本信息', component: 'hr', props: { placeholder: 'Enter remarks' } },
      // {
      //     name: 'name',
      //     label: '方案名称',
      //     component: 'a-input',
      //     props: { placeholder: 'Enter name' },
      //     span: 8
      // },
      // {
      //     name: 'contract_type',
      //     label: '合同类型',
      //     component: 'a-select',
      //     props: {
      //         placeholder: 'Select contract type',
      //         options_str: [
      //             { value: '1', label: '租赁合同' },
      //             { value: '2', label: '销售合同' },
      //             { value: '9', label: '其他' }
      //         ]
      //     },
      //     span: 8
      // },
      // {
      //     name: 'contract_status',
      //     label: '合同状态',
      //     component: 'a-select',
      //     props: {
      //         options_str: [
      //             { value: '1', label: '起草' },
      //             { value: '2', label: '正常履行' },
      //             { value: '9', label: '其他' }
      //         ]
      //     },
      //     span: 8
      // },
      // { name: 'remarks', label: '备注信息', component: 'a-input', props: { placeholder: 'Enter remarks' } },
      // { name: '支付明细', component: 'hr', props: { placeholder: 'Enter remarks' } },
      // {
      //     name: 'payment_detail_items',
      //     label: '支付明细',
      //     labelNone: true,
      //     component: 'a-input-group',
      //     columns: ['序号', '期间开始', '期间结束', '金额(含税)', '缴纳截止日期', '备注'],
      //     group: ['period_start', 'period_end', 'amount', 'due_date', 'remarks'],
      //     props: {
      //         disabled: true,
      //         placeholder: 'Enter first price',
      //         addonAfter: '¥',
      //     },
      //     span: 24
      // },
      // { name: '--', component: 'hr', props: { placeholder: 'Enter remarks' } },
      // {
      //     name: 'payment_detail_items',
      //     label: '支付明细-支付分段',
      //     labelNone: true,
      //     component: 'a-input-group-payment',
      //     columns: ['期数', '期间开始', '期间结束', '应收金额(含税)', '缴纳截止日期', '备注'],
      //     group: ['period_start', 'period_end', 'amount', 'due_date', 'remarks'],
      //     innercolumns: ['分段', '期间开始', '期间结束', '实收金额', '状态', '实际支付日期', '备注', '依据链接'],
      //     innergroup: ['index', 'period_start', 'period_end', 'payment_amount', 'state', 'payment_date', 'remarks', 'referencelink'],
      //     props: {
      //         disabled: true,
      //         placeholder: 'Enter first price',
      //         addonAfter: '¥',
      //     },
      //     span: 24
      // },
      {
        name: 'total_amount',
        label: '总金额',
        component: 'a-input-number',
        props: { disabled: true, placeholder: '0', addonAfter: '¥' },
        span: 8
      }
    ] as unknown as Field[]
)

const rules: Record<string, Rule[]> = {
  name: [{ required: true, message: 'Please enter name' }],
  first_name: [{ required: true, message: 'Please enter first name' }],
  dynamic_field: [{ required: true, message: 'Please add at least one dynamic field' }],
  first_area: [{ required: true, message: 'Please enter first area' }],
  first_price: [{ required: true, message: 'Please enter first price' }],
  second_name: [{ required: false, message: 'Please enter second name' }],
  second_area: [{ required: false, message: 'Please enter second area' }],
  second_price: [{ required: false, message: 'Please enter second price' }],
  third_name: [{ required: false, message: 'Please enter third name' }],
  third_area: [{ required: false, message: 'Please enter third area' }],
  third_price: [{ required: false, message: 'Please enter third price' }],
  total_area: [{ required: true, message: 'Please enter total area' }],
  average_price: [{ required: true, message: 'Please enter average price' }],
  initial_monthly_price: [{ required: true, message: 'Please enter initial monthly price' }],
  contract_type: [{ required: true, message: 'Please select contract type' }],
  contract_status: [{ required: true, message: 'Please select contract status' }],
  // is_default: [{ required: true, message: 'Please enter record type' }],
  // record_type: [{ required: true, message: 'Please enter record type' }],
  // contract_duration_months: [{ required: true, message: 'Please enter contract duration (months)' }],
  startdate_and_enddate: [{ required: false, message: 'Please select start date' }]
  // payment_interval_months: [{ required: true, message: 'Please enter payment interval (months)' }],
  // increase_interval_months: [{ required: true, message: 'Please enter increase interval (months)' }],
  // increase_rate: [{ required: true, message: 'Please enter increase rate (%)' }],
  // deposit: [{ required: true, message: 'Please enter deposit (元)' }],
  // rent_free_months: [{ required: true, message: 'Please enter rent free (months)' }],
  // initial_payment_duedays: [{ required: true, message: 'Please enter initial payment due days' }],
  // recurring_payment_duedays: [{ required: true, message: 'Please enter recurring payment due days' }],
  // total_amount: [{ required: true, message: 'Please enter total amount' }],
  // remarks: [{ required: false, message: 'Please enter remarks' }]
}

// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------

const planStore = usePlanStore()
const partySoftwareStore = usePartySoftwareStore()

// const editableData: UnwrapRef<Record<string, >> = reactive({});

import { useRoute } from 'vue-router'
import dayjs from 'dayjs'
import type { RPaymentPlanSplitVO } from '@/2-biz-complex/services/vo/paymentplansplit'

const route = useRoute()
onMounted(async () => {
  planStore.initState() // 初始化

  const getData = await partySoftwareStore.readByIdForRel(route?.params?.partysoftwareId as string)
  // const getData = await partySoftwareStore.readByIdForRel(route?.params?.partysoftwareId as string);
  console.log('getData:', getData)
  // // console.log("route,", route.params);
  // // const softwareData = await fetchSoftwareDataById(partysoftwareId);
  if (getData) {
    options_objArr.value = getData?.unitys
    // options_objArr.value = getData?.unitys?.map(item => ({
    //     value: item.id,
    //     label: item.code,
    // }));
  }
  // console.log("getData2:", options_objArr.value);
})

// const test = () => {
//     const data = partySoftwareStore.readByIdForRel(props.partysoftwareId)
//     console.log("test", data);

// }
// 筛选并计算 shared_area 的总和
function calculateTotalSharedArea(rel_store: string[], unityItems: any[]): number {
  console.log('@rel_store:-', rel_store)
  console.log('@unityItems-', unityItems)
  return rel_store.reduce((total, id) => {
    const matchedItem = unityItems.find((item) => item.value === id)
    console.log('@!matchedItem:', matchedItem)
    if (matchedItem) {
      console.log('Matched Item:', matchedItem, matchedItem.shared_area)
      return total + matchedItem.shared_area
    }

    // 这里记录每次累加结果
    console.log('Total so far:', total, 'with id:', id, 'not found in unityItems')
    return total
  }, 0)
}

// ----------- 传递到第三层 自定义化 -------------------------------------------------------------------
const emits = defineEmits(['showDrawer', 'closeDrawer', 'handleSubmit', 'fieldChange'])
const closeDrawer = async () => {
  emits('closeDrawer')
}
const showDrawer = async () => {
  // 打开表单
  // 重置form
  emits('showDrawer')
  // await planStore.initState()
}

const handleSubmit = async (form: any) => {
  // 提交表单
  console.log('form------------:', form)

  emits('handleSubmit', form)
  // await planStore.createPlanByClientId(clientState.data.selectID as string, form);
}
const fieldChange = async (form: CPlanVO) => {
  console.log('form------------:', form)
  emits('fieldChange', form)
  // console.log("form---------------:", form);
  // --------------------------------------------------
  // planStore.runCal('create'); // 计算 总面积 和 平均单价
  // planStore.data.CItem = form
  // 选择 不动产单元，自动计算面积 -----------------------------------------------------------------------
  if (form?.rel_store) {
    console.log('form?.rel_store', form?.rel_store)
    console.log('planStore.data.unityItems', planStore.data.unityItems)
    planStore.data.CUItem.first_area = calculateTotalSharedArea(
      form?.rel_store,
      planStore.data.unityItems
    )
  }
  if (form?.rel_store2) {
    console.log('form?.rel_store2', form?.rel_store2)
    planStore.data.CUItem.second_area = calculateTotalSharedArea(
      form?.rel_store2,
      planStore.data.unityItems
    )
  }
  if (form?.rel_store3) {
    console.log('form?.rel_store3', form?.rel_store3)
    planStore.data.CUItem.third_area = calculateTotalSharedArea(
      form?.rel_store3,
      planStore.data.unityItems
    )
  }
  planStore.runCal() // 计算 总面积 和 平均单价
}
// ----------- 传递到第三层 自定义化 -------------------------------------------------------------------

// ----------- 第二层 通用 功能 ---------------

const generateTotalAmount = async () => {
  //计算 总金额
  if (planStore.data.CUItem.payment_detail_items) {
    planStore.calculateTotalAmount(planStore.data.CUItem.payment_detail_items)
  }
}

// const generatePaymentDetails = async () => { // 生成支付明细
//     // 放入plan的基础数据，获得支付明细的数据
//     const { paymentDetails, paymentAmountArr }: { paymentDetails: CPaymentDetailItemVO[], paymentAmountArr: number[] } = await paymentMainFun(planStore.data.CUItem as RPlanVO, '0');
//     // planStore.data.paymentAmountArr = paymentAmountArr;
//     // 将 生成支付明细数据给 pinia层
//     planStore.data.CUItem.payment_detail_items = paymentDetails;

//     // 使用计算合同总金额，在getter中赋值
//     planStore.calculateTotalAmount(planStore.data.CUItem.payment_detail_items)
// }

// const generatePaymentDetails2 = async () => { // 生成支付明细[精度到小数点后2位]
//     // 放入plan的基础数据，获得支付明细的数据
//     const { paymentDetails, paymentAmountArr }: { paymentDetails: CPaymentDetailItemVO[], paymentAmountArr: number[] } = await paymentMainFun(planStore.data.CUItem as RPlanVO, '0.00');
//     // planStore.data.paymentAmountArr = paymentAmountArr;
//     // 将 生成支付明细数据给 pinia层
//     planStore.data.CUItem.payment_detail_items = paymentDetails;

//     // 使用计算合同总金额，在getter中赋值
//     planStore.calculateTotalAmount(planStore.data.CUItem.payment_detail_items)
// }

// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------
</script>

<style scoped></style>
