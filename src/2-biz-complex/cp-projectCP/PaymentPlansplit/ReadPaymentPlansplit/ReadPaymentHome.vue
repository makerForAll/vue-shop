<template>
  <!-- <a-button type="primary" @click="showDrawer"></a-button> -->
  <a-button type="link" @click="openDrawer">查看详情</a-button>
  <teleport to="body">
    <a-drawer
      v-if="drawerVisible"
      v-model:open="drawerVisible"
      title="详情"
      placement="right"
      :width="1400"
      @close="drawerVisible = false"
    >
      <!-- {{ planStore.data.CUItem.payment_detail_items }} -->
      <!-- {{ props.partysoftwareObj.plan.payment_detail_items }} -->
      <hr />

      <a-table
        style="margin-bottom: 20px"
        :pagination="false"
        :loading="planStore.data.loading"
        :scroll="{ x: 1000, y: 500 }"
        :dataSource="planStore.data.CUItem.payment_detail_items"
        :columns="innerColumns"
      >
        <template #bodyCell="{ record, column, index }">
          <!-- {{ text }} -->
          <!-- {{ column.key }} -->
          <span v-if="column.dataIndex === 'index'">{{ index + 1 }}</span>

          <a-date-picker
            :disabled="true"
            v-else-if="column.key === 'period_start'"
            v-model:value="record[column.key]"
            @change="fieldChange"
            @open-change="fieldChange"
          />
          <a-date-picker
            :disabled="true"
            v-else-if="column.key === 'period_end'"
            v-model:value="record.period_end"
            @change="fieldChange"
            @open-change="fieldChange"
          />
          <a-input
            :disabled="true"
            v-else-if="column.key === 'amount'"
            v-model:value="record.amount"
          />
          <a-input
            :disabled="true"
            v-else-if="column.key === 'remarks'"
            v-model:value="record.remarks"
          />

          <template v-else-if="column.key === 'operation'">
            <span class="table-operation">
              <a-button>编辑Item</a-button>
              <a-button @click="add(record, index)">添加Item</a-button>
            </span>
          </template>
          <!-- <span v-else>{{ text }}</span> -->
        </template>
        <template #expandedRowRender="{ record: outerRecord, index: outerIndex }">
          <a-table
            border
            style="border: 1px solid black"
            :scroll="{ x: 1300, y: 1000 }"
            size="small"
            bordered
            :columns="inner2Columns"
            :data-source="outerRecord.payment_plan_splits"
            :pagination="false"
          >
            <template #bodyCell="{ record, column, index }">
              <template v-if="column.key === 'index'">
                <span>
                  <a-tag color="blue">
                    {{ outerIndex + 1 + '期' }}{{ '-' + (index + 1) + '段' }}</a-tag
                  >
                </span>
              </template>
              <!-- record[column.key] -->

              <template v-else-if="['period_end', 'operation_date'].includes(column.dataIndex)">
                <a-date-picker
                  v-if="editableData[record?.id]"
                  v-model:value="editableData[record?.id][column.key]"
                />
                <a-date-picker :disabled="true" v-else v-model:value="record[column.key]" />
              </template>

              <template v-else-if="['period_start', 'payment_date'].includes(column.dataIndex)">
                <a-date-picker
                  v-if="editableData[record?.id]"
                  v-model:value="editableData[record?.id][column.key]"
                  @change="(value: any) => fieldChange(value, record)"
                  @open-change="(value: any) => fieldChange(value, record)"
                />
                <a-date-picker
                  :disabled="true"
                  v-else
                  v-model:value="record[column.key]"
                  @change="(value: any) => fieldChange(value, record)"
                  @open-change="(value: any) => fieldChange(value, record)"
                />
              </template>

              <template v-else-if="['set_state_model'].includes(column.dataIndex)">
                <a-select
                  v-if="editableData[record?.id]"
                  v-model:value="editableData[record?.id][column.key]"
                  style="width: 110px"
                  placeholder="Please select"
                  :options="[
                    { value: 0, label: '默认模式' },
                    { value: 1, label: '已支付[*]' }
                  ]"
                />
                <a-select
                  :disabled="true"
                  v-else
                  v-model:value="record[column.key]"
                  style="width: 110px"
                  :options="[
                    { value: 0, label: '默认模式' },
                    { value: 1, label: '已支付[*]' }
                  ]"
                />
              </template>
              <!-- {{ column.key }} -->
              <template
                v-if="
                  [
                    'payment_amount',
                    'deposit_deduction',
                    'deposit_balance',
                    'remarks',
                    'link',
                    ''
                  ].includes(column.dataIndex)
                "
              >
                <a-input
                  v-if="editableData[record?.id]"
                  v-model:value="editableData[record?.id][column.key]"
                />
              </template>
              <template v-else-if="column.dataIndex === 'state2'">
                <span>{{ checkAndUpdateState(record) }}</span>
              </template>
              <template v-else-if="column.key === 'operation'">
                <span class="table-operation">
                  <div class="editable-row-operations">
                    <span v-if="editableData[record.id]">
                      <a-typography-link @click="save(record.id, outerIndex)"
                        >保存
                      </a-typography-link>
                      <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.id)">
                        <a> 取消</a>
                      </a-popconfirm>
                    </span>
                    <span v-else>
                      <!-- <a @click="edit(record.id, outerIndex)">编辑</a> -->
                      <!-- {{ record.id }} -->
                      <updateBTNView :edit="edit" :record-id="record?.id" :outer-index="outerIndex">
                      </updateBTNView>
                      <!-- <a>Edit</a> -->
                    </span>
                  </div>
                  <a-button @click="remove(record, index, outerIndex)"> 删除</a-button>
                </span>
              </template>
              <template v-else> </template>
            </template>
          </a-table>
        </template>
      </a-table>
    </a-drawer>
  </teleport>
</template>

<script setup lang="ts">
import type { RPaymentDetailItemVO } from '@/2-biz-complex/services/vo/paymentdetailitem'
import type { RPaymentPlanSplitVO } from '@/2-biz-complex/services/vo/paymentplansplit'
// import type { RPlanVO, UPlanVO } from '@/2-biz-complex/services/vo/plan'
import { usePlanStore } from '@/stores'
import dayjs from 'dayjs'
import { cloneDeep } from 'lodash'
import { reactive, ref, type UnwrapRef } from 'vue'
import updateBTNView from '@/2-biz-complex/cp-projectCP/PaymentPlansplit/ReadPaymentPlansplit/updateBTN.vue'

const props = defineProps<{
  partysoftwareObj: any
}>()

const editableData: UnwrapRef<Record<string, any>> = reactive({})

const edit = (uuid: string, outerIndex: number) => {
  editableData[uuid] = cloneDeep(
    planStore.data.CUItem.payment_detail_items[outerIndex]?.payment_plan_splits?.filter(
      (item) => uuid === item.id
    )[0]
  )
}
const save = (uuid: string, outerIndex: number) => {
  if (editableData[uuid]) {
    Object.assign(
      planStore.data.CUItem.payment_detail_items[outerIndex]?.payment_plan_splits?.filter(
        (item) => uuid === item?.id
      )[0] as RPaymentPlanSplitVO,
      editableData[uuid]
    )
    delete editableData[uuid]
    planStore.update(planStore.data.selectID, planStore.data.CUItem)
  }
}
const cancel = (uuid: string) => {
  delete editableData[uuid]
}
// 抽屉状态
const drawerVisible = ref(false)
// const selectedRecord = ref(null)

// 打开抽屉并设置选中的记录
const openDrawer = () => {
  // planStore.readById(planStore.data.selectID);
  planStore.data.CUItem = props.partysoftwareObj.plan
  // planStore.readByPartySoftwareId();
  //   selectedRecord.value = record;
  drawerVisible.value = true
  // ----------
  // planStore.data.CUItem.payment_detail_items.forEach((item: RPaymentDetailItemVO) => {
  //     item.payment_plan_splits.forEach((obj: RPaymentPlanSplitVO) => {
  //         // currentState.value = ch
  //         eckAndUpdateState(obj) as string;
  //     })
  // })
}

const planStore = usePlanStore()

const innerColumns = [
  { title: '期数', dataIndex: 'index', key: 'index', width: '5%', className: 'innerc' },
  {
    title: '期间开始',
    dataIndex: 'period_start',
    key: 'period_start',
    width: '12%',
    className: 'innerc'
  },
  {
    title: '期间结束',
    dataIndex: 'period_end',
    key: 'period_end',
    width: '15%',
    className: 'innerc'
  },
  { title: '应收金额', dataIndex: 'amount', key: 'amount', width: '20%', className: 'innerc' },
  { title: '备注', dataIndex: 'remarks', key: 'remarks', width: '18%' },
  { title: '操作', key: 'operation', width: '80px', className: 'operation' }
]
const inner2Columns = [
  { title: '分段', dataIndex: 'index', key: 'index', width: '80px', fixed: 'left' },
  { title: '分段开始', dataIndex: 'period_start', key: 'period_start', width: '150px' },
  { title: '分段结束', dataIndex: 'period_end', key: 'period_end', width: '150px' },
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
    dataIndex: 'state2',
    key: 'state2',
    width: '180px',
    fixed: 'right',
    options: [
      { value: 0, label: '未到时间' },
      { value: 1, label: '已支付' },
      { value: 2, label: '已过期' }
    ]
  },
  {
    title: '状态模式',
    dataIndex: 'set_state_model',
    key: 'set_state_model',
    width: '130px',
    fixed: 'right',
    options: [
      { value: 0, label: '默认模式' },
      { value: 1, label: '已支付(*)' }
    ]
  },
  { title: '操作', key: 'operation', width: '160px', className: 'operation', fixed: 'right' }
]

//-----
const add = async (obj: RPaymentDetailItemVO, indexNum: any) => {
  // console.log(toRaw(obj))
  const { index } = await planStore.getObjIndex(obj.id as string)
  // 我要添加的 item值
  const split: RPaymentPlanSplitVO = {
    index: indexNum + 1,
    childIndex: planStore.data.CUItem.payment_detail_items[index].payment_plan_splits?.length,
    period_start: planStore.data.CUItem.payment_detail_items[index].period_start,
    period_end: planStore.data.CUItem.payment_detail_items[index].period_end,
    payment_amount: planStore.data.CUItem.payment_detail_items[index].amount,
    remarks: '',
    deposit_deduction: 0,
    deposit_balance: planStore.data.CUItem.deposit,
    state: 0,
    set_state_model: 0,
    payment_date: planStore.data.CUItem.payment_detail_items[index].due_date,
    referencelink: '',
    operation_date: dayjs()
  }
  // 问题： 添加完数据后，CUItem中的 splt没有ID了。

  // 更新this.data.RItems[0] 中的 Item值。、、不能直接添加到 pinia层，因为没有获得后端数据库分配的ID
  //
  // 再通过 update来 联级 更新 plan值，这样 子级也可以更新。
  // planStore.update(planStore.data.selectID, planStore.data.CUItem);
  planStore.updateForpayment(planStore.data.selectID, planStore.data.CUItem, obj, split)
  // planStore.data.RItems.push(obj)
  // planStore.data.RItems
  // planStore.data.
}

const remove = async (obj: RPaymentPlanSplitVO, splitIndex: number, paymentIndex: number) => {
  // const { index } = await planStore.getObjIndex(obj);
  planStore.deletePaymentPlanSplit(obj, splitIndex, paymentIndex)
}

// const calState = () =>{

// }

// const currentState = ref<string>('data待刷新')
function checkAndUpdateState(obj: RPaymentPlanSplitVO) {
  const today = dayjs() // 当前日期
  const periodStart = obj.period_start // 合同-期间开始
  const daysDiff = periodStart.diff(today, 'day') // 差值

  if (obj.set_state_model === 0) {
    // 默认模式下，进行自动计算
    if (today.isAfter(obj.period_start, 'day')) {
      // 过期后，过多少天
      const expiredDays = today.diff(periodStart, 'day')
      return `已过期,已超期[${expiredDays}天]`
    }

    if (daysDiff <= 30 && daysDiff >= 0) {
      // 临近还剩下多少天
      return `临近,距离截止日期[${daysDiff}天]`
    }

    if (daysDiff > 30) {
      // 临近还剩下多少天
      return `未到，距离截止日期[${daysDiff}天]`
    }
  } else if (obj.set_state_model === 1) {
    return `已支付:于${obj.operation_date.format('YYYY-MM-DD')}`
  }
}
const fieldChange = async (value: any, obj: RPaymentPlanSplitVO) => {
  console.log('fieldChange:', obj)

  // currentState.value = checkAndUpdateState(obj) as string;
}
</script>

<style scoped>
/* .ant-spin-container>.ant-table {
    border: 1px black solid !important;
} */
</style>
