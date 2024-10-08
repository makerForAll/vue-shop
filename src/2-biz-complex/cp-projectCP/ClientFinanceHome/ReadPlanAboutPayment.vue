<template>
  <a-button type="primary" @click="showDrawer">查看明细</a-button>
  <a-drawer
    :placement="'right'"
    :maskClosable="false"
    v-model:open="open"
    :title="`${clientStore.data.selectName}-明细`"
    width="95%"
    :closable="false"
    :footer-style="{ textAlign: 'right' }"
    @close="onClose"
  >
    <template #extra>
      <slot name="header"></slot>
    </template>
    <!-- 插槽 hearder -->

    <!-- 标签页  ----------------------------------------------------------- -->
    <div>
      <!-- <a-spin :spinning="planStore.data.loading"> -->
      <a-skeleton :loading="planStore.data.loading">
        <a-tabs
          :tabBarStyle="{ backgroundColor: 'lightblue', padding: '16px' }"
          v-model:activeKey="activeKey"
          hide-add
          @change="(key: any) => tabClick(key)"
          type="editable-card"
          @edit="onEdit"
        >
          <a-tab-pane
            :style="{
              transform: `scale(${headerStore.getScale})`,
              transformOrigin: 'top left'
            }"
            v-for="pane in planStore.data.RItems"
            :key="pane.id"
            :tab="pane.name"
            :closable="false"
            @click="() => tabClick(pane.id)"
          >
            <!-- {{ pane }} -->
            <!-- <component :is="pane?.content" /> -->

            <!-- 插槽 operations -->
            <a-space>
              <slot name="operations"> </slot>

              <!-- <gButtonVue :plan-obj="pane"></gButtonVue> -->
              <a-button @click="planStore.switchToggleChangeForTable">遮盖信息</a-button>
              <a-button @click="handlePrint(pane.id as string)">打印</a-button>
              <a-button disabled>快速分享(待开发)</a-button>
              <!-- <cButtonVue :plan-obj="pane"></cButtonVue> -->
            </a-space>
            <div
              class="PrintMeReadPlan"
              style="border: 1px solid gray; padding: 20px"
              :id="`printMe${pane.id}`"
            >
              <a-row>
                <!-- //--- -->
                <a-col :span="12">
                  <a-skeleton :loading="planStore.data.loadingForTable">
                    <hr />

                    <a-tag>客户名称：{{ pane?.client?.name }}</a-tag>
                    <a-tag>{{ pane?.remarks }}</a-tag>
                    <h1>一、乙方承租商铺基础数据计算</h1>
                    <table border="1">
                      <thead>
                        <tr>
                          <th>序号</th>
                          <th>位置</th>
                          <th>面积(平方)</th>
                          <th>单价(每平米/人民币)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <span style="font-size: 12px">{{
                              getLabelsFromValues(
                                pane?.rel_store as string[],
                                planStore.data.unityItems as Option[]
                              )
                            }}</span>
                          </td>
                          <td>{{ pane.first_area }}</td>
                          <td>{{ pane.first_price }}</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <span style="font-size: 12px">{{
                              getLabelsFromValues(
                                pane?.rel_store2 as string[],
                                planStore.data.unityItems as Option[]
                              )
                            }}</span>
                          </td>
                          <td>{{ pane.second_area }}</td>
                          <td>{{ pane.second_price }}</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <span style="font-size: 12px">{{
                              getLabelsFromValues(
                                pane?.rel_store3 as string[],
                                planStore.data.unityItems as Option[]
                              )
                            }}</span>
                          </td>
                          <td>{{ pane.third_area }}</td>
                          <td>{{ pane.third_price }}</td>
                        </tr>
                      </tbody>
                    </table>

                    <label :for="`${pane.id}` + 'initial_monthly_price'"
                      >计租期开始约租金价格(元/每月):</label
                    ><input
                      :id="`${pane.id}` + 'initial_monthly_price'"
                      :name="`${pane.id}` + 'initial_monthly_price'"
                      :disabled="true"
                      :value="pane.initial_monthly_price"
                    />
                    <br />
                    <label :for="`${pane.id}` + 'total_area'">面积约(平方)：</label
                    ><input
                      :id="`${pane.id}` + 'total_area'"
                      :name="`${pane.id}` + 'total_area'"
                      :disabled="true"
                      :value="pane.total_area"
                    /><br />
                  </a-skeleton>
                </a-col>
                <a-col :span="12"></a-col> </a-row
              ><!-- //--- -->

              <h1>二、合同基础信息</h1>
              <label :for="`${pane.id}` + 'startdate_and_enddate[0]'">合同生效起始日期：</label
              ><input
                :id="`${pane.id}` + 'startdate_and_enddate[0]'"
                :name="`${pane.id}` + 'startdate_and_enddate[0]'"
                :disabled="true"
                :value="
                  dayjs(pane.startdate_and_enddate ? pane.startdate_and_enddate[0] : '').format(
                    'YYYY-MM-DD'
                  )
                "
              />
              <br />
              <label :for="`${pane.id}` + 'startdate_and_enddate[1]'">合同生效截止日期：</label
              ><input
                :id="`${pane.id}` + 'startdate_and_enddate[1]'"
                :name="`${pane.id}` + 'startdate_and_enddate[1]'"
                :disabled="true"
                :value="
                  dayjs(pane.startdate_and_enddate ? pane.startdate_and_enddate[1] : '').format(
                    'YYYY-MM-DD'
                  )
                "
              /><br />
              <label :for="`${pane.id}` + 'contract_duration_days'">合同天数：</label
              ><input
                :id="`${pane.id}` + 'contract_duration_days'"
                :name="`${pane.id}` + 'contract_duration_days'"
                :disabled="true"
                :value="pane.contract_duration_days"
              />
              <a-skeleton :loading="planStore.data.loadingForTable">
                <br />
                <label :for="`${pane.id}` + 'payment_interval_months'">租金缴纳周期(每多少月)</label
                ><input
                  :id="`${pane.id}` + 'payment_interval_months'"
                  :name="`${pane.id}` + 'payment_interval_months'"
                  :disabled="true"
                  :value="pane.payment_interval_months"
                /><br />
                <label :for="`${pane.id}` + 'increase_interval_months'"
                  >增长率条件(每多少月)：</label
                ><input
                  :id="`${pane.id}` + 'increase_interval_months'"
                  :name="`${pane.id}` + 'increase_interval_months'"
                  :disabled="true"
                  :value="pane.increase_interval_months"
                /><br />
                <label :for="`${pane.id}` + 'increase_rate'">增长率(百分之)：</label
                ><input
                  :id="`${pane.id}` + 'increase_rate'"
                  :name="`${pane.id}` + 'increase_rate'"
                  :disabled="true"
                  :value="pane.increase_rate"
                /><br />
                <label :for="`${pane.id}` + 'deposit'">押金(元)：</label
                ><input
                  :id="`${pane.id}` + 'deposit'"
                  :name="`${pane.id}` + 'deposit'"
                  :disabled="true"
                  :value="pane.deposit"
                /><br />
                <label :for="`${pane.id}` + 'rent_free_months'">JM(月份)</label
                ><input
                  :id="`${pane.id}` + 'rent_free_months'"
                  :name="`${pane.id}` + 'rent_free_months'"
                  :disabled="true"
                  :value="pane.rent_free_months"
                /><br />
              </a-skeleton>
              <!-- <span>租金缴纳周期(每多少月)</span><input :disabled="true" :value="pane.payment_interval_months"><br> -->
              <!-- <span>增长率条件(每多少月)：</span><input :disabled="true" :value="pane.increase_interval_months"><br> -->
              <!-- <span>增长率(百分比)：</span><input :disabled="true" :value="pane.increase_rate"><br> -->
              <!-- <span>押金：</span><input :disabled="true" :value="pane.deposit"><br> -->
              <a-row>
                <a-col :span="12">
                  <h1>三、总结-租赁押金和租金支付时间节点及具体金额</h1>
                  <h4>押金情况</h4>
                  <table border="1">
                    <thead>
                      <tr>
                        <td>#</td>
                        <td>金额(元)</td>
                        <td>缴纳截止日期</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>押金</td>
                        <td>{{ pane.deposit }}</td>
                        <td>
                          {{
                            dayjs(pane.startdate_and_enddate ? pane.startdate_and_enddate[0] : '')
                              .add(3 as number, 'day')
                              .format('YYYY-MM-DD')
                          }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <h4>合同租金缴纳详情</h4>
                  <slot name="pay"> </slot>
                </a-col>
                <a-col :span="12"> </a-col>
              </a-row>
              <a-row>
                <a-col :span="12">
                  <table border="1" v-if="pane?.payment_detail_items">
                    <thead>
                      <tr>
                        <td>期数</td>
                        <td>期间开始</td>
                        <td>期间结束</td>
                        <td style="text-align: right">金额(元)</td>
                        <td>缴纳截止日期</td>
                        <td>明细备注</td>
                        <td>是否已支付</td>
                        <td>支付时间</td>
                      </tr>
                    </thead>
                    <div></div>
                    <tbody>
                      <tr
                        v-for="(payment, index) in planStore.sortedPaymentItems(
                          pane.payment_detail_items
                        )"
                        :key="index"
                      >
                        <td style="width: 4%; text-align: center">{{ index + 1 }}</td>
                        <td style="width: 15%; text-align: center">
                          {{ dayjs(payment?.period_start).format('YYYY-MM-DD') }}
                        </td>
                        <td style="width: 15%; text-align: center">
                          {{ dayjs(payment?.period_end).format('YYYY-MM-DD') }}
                        </td>
                        <td style="width: 18%; text-align: right">
                          {{ planStore?.formatCurrency(payment?.amount) }}
                        </td>
                        <td style="width: 18%; text-align: center">
                          {{ dayjs(payment?.due_date).format('YYYY-MM-DD') }}
                        </td>
                        <td style="width: 30%; text-align: center">{{ payment?.remarks }}</td>
                        <!-- <td>{{ payment.is_paid }}</td> -->
                        <td></td>
                      </tr>
                      <tr>
                        <td colspan="3" style="text-align: center; font-size: 20px">总金额</td>
                        <td style="text-align: right">
                          {{ planStore?.formatCurrency(pane?.total_amount as number) }}
                        </td>
                        <td colspan="2"></td>
                      </tr>
                    </tbody>
                  </table>
                </a-col>
              </a-row>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-skeleton>
      <!-- </a-spin> -->
    </div>

    <hr />
    <template #footer>
      <a-button style="margin-right: 8px" @click="onClose">关闭</a-button>
      <!-- <a-button type="primary" @click="onClose">Submit</a-button> -->
    </template>
  </a-drawer>
</template>
<script lang="ts" setup>
// import type { APIParams } from '@/api/services/plan'
//   import gButtonVue from '../Common/gButton.vue';
//   import cButtonVue from '../Common/cButton.vue';
import { onMounted, ref } from 'vue'
// import { usePagination } from 'vue-request'
import { usePlanStore } from '@/stores/plan'
import { useClientStore } from '@/stores/client'
// import type{PlanBackEndDTO} from '@/api';
import dayjs from 'dayjs'
const headerStore = useHeaderStore()
const planStore = usePlanStore()
const clientStore = useClientStore()
const unityStore = useUnityStore()

let activeKey = ref<string | undefined>('') // 当前 正在显示的 一栏

type Option = {
  value: string
  label: string
  disabled: boolean
}
// 获取 rel_store 对应的 label 值的函数
function getLabelsFromValues(rel_store: string[], options: Option[]): string[] {
  return rel_store?.map((value) => {
    const option = options.find((opt) => opt.value === value)
    return option ? option.label : value // 如果找不到对应的 label，则返回原值
  })
}

// let dataSound = reactive([
//   { title: `Tab2`, content: `Content of Tab Pane 2`, key: 2 },
//   { title: `Tab2`, content: `Content of Tab Pane 3`, key: 3, closable: false }
// ])

// ------------------- 抽屉层相关事件 -----------------------------
const open = ref<boolean>(false)

const showDrawer = async () => {
  open.value = true
  console.log('clientStore.data.selectID---', clientStore.data.selectID)
  await planStore.readByClientId(clientStore.data.selectID as string)
  // 逻辑梳理
  // if (clientStore.data.selectID) {
  //  await planStore.readByClientId(clientStore.data.selectID as string)
  //   // console.log("openDrawerPlan:---",plan);

  //       // tab 初始化
  //   if (
  //     planStore?.data.selectID === undefined ||
  //     planStore?.data.selectID === '' ||
  //     planStore?.data.selectID === ''
  //   ) {
  //     console.log('test--:',planStore?.data?.items[0]?.id)

  //     planStore.data.selectID = planStore?.data?.items[0]?.id as string;
  //     activeKey.value = planStore?.data?.items[0]?.id
  //   }
  // }
  const unitydata = await unityStore.readObjsByFieldId(headerStore.partysoftwareId) // 确保使用 await 等待 Promise 解决
  if (unitydata) {
    planStore.data.unityItems = unitydata?.map((item) => ({
      value: item.id,
      label: item.code,
      disabled: item.plan ? true : false,
      shared_area: item.shared_area
    }))
  }
  // + `${item.plan ? '->' + item?.plan?.name + '->' : ''}${item.plan?.client ? item.plan?.client?.name : ''}`
}

const onClose = () => {
  open.value = false
}

// ---------------------------------------------------------------

// --------------------------- 标签页 层 ------------------------------------

const tabClick = async (id: any) => {
  // console.log('zujian:', id)
  planStore.data.selectID = id
  // planStore.data.selectName = obj.name;
  // planStore.data.RItem = obj;
  // planStore.data.selectID = id
}

const onEdit = (targetKey: string | undefined) => {
  // remove(targetKey);
  console.log('targetKey', targetKey)
}

// onMounted(async () => {
//   const unitydata = await unityStore.readObjsByFieldId(headerStore.partysoftwareId); // 确保使用 await 等待 Promise 解决
//   if (unitydata) {
//     planStore.data.unityItems = unitydata.map(item => ({
//       value: item.id,
//       label: item.code
//     }));
//   }
// });
// onMounted(()=>{
//   activeKey.value = planStore?.readState?.items[0]?.id;
//   planStore.updateState.selectID = planStore?.readState?.items[0]?.id;
// })

// watch(
//   () => planStore.readState.formatItems,
//   (newItems, oldItems) => {
//     Object.assign(dataSound,newItems);
//     console.log('formatItems changed:', newItems);
//   },
//   { deep: true }
// );

// ------------------- 打印内容层 -------------------------------
import { VuePrintNext } from 'vue-print-next'
// import { shareAreaFun } from '../tool/shareArea/shareAreaCal';
// import type { RPlanVO } from '@/services/vo/plan';
// import type { CPaymentDetailItemVO, RPaymentDetailItemVO } from '@/services/vo/paymentdetailitem';
import { useHeaderStore } from '@/stores/header'
// import { cloneDeep } from 'lodash';
import { useCommonStore } from '@/stores/common'
// import { usePartySoftwareStore } from '@/stores/partysoftware';
import { useUnityStore } from '@/stores'
const commonStore = useCommonStore()
function handlePrint(id: string) {
  commonStore.insertDynamicCSS('landscape')
  new VuePrintNext({ el: `#printMe${id}` /** 其他参数 */ })
}
</script>

<style>
/*---------------------*/
table {
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
}

th,
td {
  padding: 8px 12px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* 防止内容换行 */
}
@media print {
  body {
    height: auto;
  }
}
</style>
