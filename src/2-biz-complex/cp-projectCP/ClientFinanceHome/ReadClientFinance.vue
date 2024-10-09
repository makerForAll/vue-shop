<template>
  <a-space :size="'middle'">
    <slot name="headerHandle"> </slot>
    <a-button @click="handlePrint('ReadClientFinanceHome')">打印表格</a-button>
  </a-space>
  <div class="tablestyle-div">
    <a-table
      size="small"
      id="printMeReadClientFinanceHome"
      @expand="onExpandChange"
      :row-class-name="'tablestyle'"
      :columns="columns"
      :data-source="transformedData"
      class="components-table-demo-nested"
    >
      <template #bodyCell="{ column, text, record }">
        <div
          @mouseover="(event) => handleMouseOver(event, record.id, record.name, record)"
          @mouseleave="handleMouseLeave"
        >
          <template v-if="column.key === 'name'">
            {{ record.name }}
          </template>
          <template v-if="column.key === 'IDcard'">
            {{ record.IDcard }}
          </template>
          <template v-else-if="column.key === 'area'">
            {{ record.area }}
          </template>
          <template v-else-if="column.key === 'code'">
            <template v-for="item in text" :key="item.id">
              <a-tag color="blue">{{ item }}</a-tag>
            </template>
          </template>
          <template v-else-if="column.key === 'state'">
            <template v-if="text === '已逾期'">
              <a-badge status="error" />
              {{ text }}
            </template>
            <template v-else-if="text === '当期已缴纳'">
              <a-badge status="success" />
              {{ text }}
            </template>
          </template>
          <template v-else-if="column.key === 'operation'">
            <slot name="operation" :record="record"> </slot>
          </template>
        </div>
      </template>

      <!-- edit start-->
      <template #expandedRowRender="{ record: payment_detail_items }">
        <!-- {{ record.plan.payment_detail_items }} -->
        <a-table
          size="small"
          :scroll="{ x: 800, y: 'auto' }"
          :row-class-name="'tablestyle2'"
          :columns="inner2Columns"
          :data-source="payment_detail_items?.payment_plan_splits"
          :pagination="false"
        >
          <template #bodyCell="{ record, column, text }">
            <!-- {{ record }} -->
            <template v-if="column.key === 'index'">
              <span>
                <a-tag color="blue">{{ record.index }}</a-tag>
              </span>
            </template>
            <template v-else-if="column.key === 'set_state_model'">
              <a-badge :color="setModel(text).color" :text="setModel(text).text" />
            </template>

            <template
              v-else-if="
                column.key === 'period_start' ||
                column.key === 'period_end' ||
                column.key === 'payment_date' ||
                column.key === 'operation_date'
              "
            >
              {{ dayjs(text).format('YYYY-MM-DD') }}
            </template>
            <template v-else>
              {{ text }}
            </template>
          </template>
        </a-table>
      </template>
      <!-- edit end -->
    </a-table>
  </div>
</template>

<script lang="ts" setup>
import type { PlanTreeVO, RPlanVO } from '@/2-biz-complex/services/vo/plan'
import { usePlanStore } from '@/stores'
import { useCommonStore } from '@/stores/common'
import { useHeaderStore } from '@/stores/header'
import dayjs from 'dayjs'
import { onMounted, ref } from 'vue'
import { VuePrintNext } from 'vue-print-next'
// import { DownOutlined } from '@ant-design/icons-vue'
import type { RPaymentPlanSplitVO } from '@/2-biz-complex/services/vo/paymentplansplit'
const commonStore = useCommonStore()

const isPrinting = ref(false)
function handlePrint(id: string) {
  isPrinting.value = true
  commonStore.insertDynamicCSS('landscape')
  new VuePrintNext({ el: `#printMe${id}` /** 其他参数 */ })
}
// 定义数据类型
// interface PaymentItem {
//   id: string;
//   beginDate: string;
//   endDate: string;
//   amount: string;
//   state: string;
//   paymentDate: string;
//   remarks: string;
//   link: string;
// }

// interface PlanItem {
//   id: string;
//   beginDate: string;
//   endDate: string;
//   amount: string;
//   state: string;
//   remarks: string;
//   payment: PaymentItem[];
// }

// interface DataItem {
//   id: string;
//   name: string;
//   area: string;
//   idcard: string;
//   platform: string;
//   code: string[];
//   amount: string;
//   state: string;
//   payDate: string;
//   creator: string;
//   createdAt: string;
//   plan: PlanItem[]
// }

// interface PaymentItem {
//   id: string;
//   beginDate: string;
//   endDate: string;
//   amount: string;
//   state: string;
//   paymentDate: string;
//   remarks: string;
//   link: string;
// }

// interface PlanItem {
//   id: string;
//   beginDate: string;
//   endDate: string;
//   amount: string;
//   state: string;
//   remarks: string;
//   payment: PaymentItem[];
// }

interface DataItem {
  id: string
  IDcard: string
  name: string
  area: string
  platform: string
  code: string[]
  total_amount: string
  state: string
  payDate: string
  creator: string
  createdAt: string
  // plan: RPlanVO[]
}

const columnsAlign = ref('left')
// const innerColumnsAlign = ref('left')
const inner2ColumnsAlign = ref('center')

const columns = [
  // {title:'序号'},
  {
    title: '客户名称',
    dataIndex: 'name',
    key: 'name',
    width: '90px',
    align: columnsAlign.value
  },
  {
    title: '身份证号',
    dataIndex: 'IDcard',
    key: 'IDcard',
    width: '190px',
    align: columnsAlign.value
  },
  { title: '面积', dataIndex: 'area', key: 'area', width: '70px', align: columnsAlign.value },
  { title: '位置', dataIndex: 'code', key: 'code', width: '220px', align: columnsAlign.value },
  {
    title: '累计欠缴金额',
    dataIndex: 'amount',
    key: 'amount',
    width: '120px',
    align: columnsAlign.value
  },
  // { title: '累计缴纳截止日期', dataIndex: 'payDate', key: 'payDate', width: '150px', align: columnsAlign.value },
  // { title: '当期缴纳状态', dataIndex: 'state', key: 'state', width: '100px', align: columnsAlign.value },
  { title: 'Date', dataIndex: 'createdAt', key: 'createdAt', align: columnsAlign.value },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: '80px',
    className: 'operation',
    align: columnsAlign.value
  }
]

// 嵌套表格列（展开后的表格显示的列）
// const innerColumns = [
//   {
//     title: '期数',
//     dataIndex: 'index',
//     key: 'index',
//     width: '12%',
//     className: 'innerc',
//     align: innerColumnsAlign.value
//   },
//   {
//     title: '期间开始',
//     dataIndex: 'period_start',
//     key: 'period_start',
//     width: '12%',
//     className: 'innerc',
//     align: innerColumnsAlign.value
//   },
//   {
//     title: '期间结束',
//     dataIndex: 'period_end',
//     key: 'period_end',
//     width: '15%',
//     className: 'innerc',
//     align: innerColumnsAlign.value
//   },
//   {
//     title: '应收金额',
//     dataIndex: 'amount',
//     key: 'amount',
//     width: '20%',
//     className: 'innerc',
//     align: innerColumnsAlign.value
//   },
//   {
//     title: '备注',
//     dataIndex: 'remarks',
//     key: 'remarks',
//     width: '36%',
//     align: innerColumnsAlign.value
//   }
// ]

enum setStateModelType {
  /**
   * 没有到期
   */
  NotExpired = 0,
  /**
   * 已支付
   */
  Expired = 1
}

/**
 * Description 支付详情-分段 函数
 * @param {any} data:setStateModelType
 * @returns {any}
 */

function setModel(data: setStateModelType) {
  switch (data) {
    case setStateModelType.NotExpired:
      return { color: 'red', text: '未支付' }
    case setStateModelType.Expired:
      return { color: 'green', text: '已支付' }
    default:
      return { color: 'yellow', text: '未知' }
  }
}

const inner2Columns = [
  {
    title: '期数-段数',
    dataIndex: 'index',
    key: 'index',
    width: '12%',
    align: inner2ColumnsAlign.value
  },
  {
    title: '期间开始',
    dataIndex: 'period_start',
    key: 'period_start',
    width: '15%',
    align: inner2ColumnsAlign.value
  },
  {
    title: '期间结束',
    dataIndex: 'period_end',
    key: 'period_end',
    width: '15%',
    align: inner2ColumnsAlign.value
  },
  {
    title: '实收金额',
    dataIndex: 'payment_amount',
    key: 'amount',
    width: '20%',
    align: inner2ColumnsAlign.value
  },
  {
    title: '状态',
    dataIndex: 'set_state_model',
    key: 'set_state_model',
    width: '15%',
    align: inner2ColumnsAlign.value
  },
  {
    title: '截止日期',
    dataIndex: 'payment_date',
    key: 'payment_date',
    width: '15%',
    align: inner2ColumnsAlign.value
  },
  {
    title: '实际支付日期',
    dataIndex: 'operation_date',
    key: 'operation_date',
    width: '15%',
    align: inner2ColumnsAlign.value
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    key: 'remarks',
    width: '36%',
    align: inner2ColumnsAlign.value
  },
  {
    title: '依据链接',
    dataIndex: 'link',
    key: 'link',
    width: '13%',
    className: 'innerc2-link',
    align: inner2ColumnsAlign.value
  }
]
// -----------------------------------------------------------------------------------
const handleMouseOver = async (event: MouseEvent, id: string, name: string, obj: RPlanVO) => {
  console.log('Hovered over row with ID:', id)
  // 需要优化
  // clientStore.data.selectID = id;
  await planStore.updateSelectID(id, name, obj)
  // clientStore.deleteState.selectID = id;
  // clientStore.readState.selectID = id;
}

const handleMouseLeave = async () => {
  // clientStore.data.selectID = '';
  // await planStore.clearSelectID();
  // console.log('Mouse left the row');
}

const planStore = usePlanStore()
const headerStore = useHeaderStore()
const transformedData = ref<DataItem[]>([]) // 转换后的数据
onMounted(async () => {
  planStore.readByPartySoftwareId(headerStore.partysoftwareId).then(() => {
    transformedData.value = transformAPIData(planStore.data.RItems)
  })
})

// 很重要的映射展示
function transformAPIData(apiData: any[]): DataItem[] {
  return apiData.map((plan: PlanTreeVO) => ({
    id: plan?.id as string,
    name: plan.client?.name as string, // 映射 API 数据中的 plan.client.name 到表格中的 name
    IDcard: plan.client?.IDcard as string, // 假设没有身份证字段，可以留空或者从 API 数据中找到合适的字段
    area: plan.total_area ? plan.total_area.toString() : '0',
    code: plan.unitys?.map((unity: any) => unity.code) as string[], // 提取单元的 code 作为位置
    total_amount: `￥${plan.total_amount}`, // 将总金额格式化为金额字符串
    state: plan.contract_status === '1' ? '当期已缴纳' : '已逾期', // 状态的简单映射
    createdAt: plan.createdAt as any,
    platform: '', // 假设 platform 在 API 数据中没有，可以留空或者映射其他字段
    payDate: '', // 假设 payDate 在 API 数据中没有，可以留空或者映射其他字段
    creator: 'Jack', // 如果有创建者信息，可以从 API 数据中找到合适字段
    plan: plan as PlanTreeVO,
    payment_plan_splits: plan.payment_detail_items
      .reduce((accumulator: RPaymentPlanSplitVO[], current) => {
        return accumulator.concat(current?.payment_plan_splits || [])
      }, [])
      .sort((a: any, b: any) => {
        const [aFirst, aSecond] = a.index.split('-').map(Number) // 将字符串分割并转换为数字
        const [bFirst, bSecond] = b.index.split('-').map(Number)

        // 首先比较第一个数字
        if (aFirst !== bFirst) {
          return aFirst - bFirst
        }
        // 如果第一个数字相同，则比较第二个数字
        return aSecond - bSecond
      })
    // plan: plan.payment_detail_items.map((item: any, index: number) => ({
    //   id: plan.id,
    //   beginDate: `${item.period_start.format('YYYY-MM-DD')}`,
    //   endDate: `${item.period_end.format('YYYY-MM-DD')}`,
    //   amount: `￥${item.amount}`,
    //   state: item.is_paid ? item.is_paid : '没有值',
    //   remarks: item.remarks || '',
    //   payment: [
    //     {
    //       id: item.id || 'unknown',
    //       beginDate: item.period_start.format('YYYY-MM-DD'),
    //       endDate: item.period_end.format('YYYY-MM-DD'),
    //       amount: `￥${item.amount}`,
    //       state: item.is_paid ? item.is_paid : '没有值',
    //       paymentDate: item.due_date,
    //       remarks: item.remarks || '',
    //       link: '' // 如果有链接信息可以在这里设置
    //     }
    //   ]
    // }))
  }))
}
// 主表数据
// const data: DataItem[] = [
//   {
//     id: '1',
//     name: `客户 ${0 + 1}`,
//     area: '512',
//     idcard: '123456789012345678',
//     code: ['14#01-01', '14#01-02', '14#01-03', '14#01-04'],
//     total_amount: '￥ 0',
//     state: '当期已缴纳', // 计算函数
//     payDate: '2015-11-24',
//     creator: 'Jack',
//     createdAt: '2014-12-24',
//     platform: '',
//     plan: [
//       {
//         id: '11', beginDate: '2023-01-01', endDate: '2023-06-30', amount: '￥1000', state: '已缴纳', remarks: ''
//         , payment: [{ id: '11111', beginDate: '2023-01-01', endDate: '2023-06-30', amount: '￥1000', state: '已缴纳', paymentDate: '2024-5-1', remarks: '', link: 'wwww.baidu.com' }, { id: '11111', beginDate: '2023-01-01', endDate: '2023-06-30', amount: '￥1000', state: '已缴纳', paymentDate: '2024-5-1', remarks: '', link: 'wwww.baidu.com' }]
//       },
//       {
//         id: '22', beginDate: '2023-07-01', endDate: '2023-12-31', amount: '￥1000', state: '未缴纳', remarks: '',
//         payment: [{ id: '22222', beginDate: '2023-01-01', endDate: '2023-06-30', amount: '￥1000', state: '已缴纳', paymentDate: '2024-5-1', remarks: '', link: 'wwww.baidu.com' }]
//       }
//     ],
//   },
//   {
//     id: '2',
//     name: `客户 ${1 + 1}`,
//     area: '135',
//     idcard: '123456789012345678',
//     // code: '10#01-01',
//     code: ['10#01-01', '10#01-02'],
//     total_amount: '￥ 568.08',
//     state: '已逾期',
//     payDate: '2015-11-24',
//     creator: 'Jack',
//     createdAt: '2014-12-24',
//     platform: '',
//     plan: [
//       {
//         id: '3333', beginDate: '2023-01-01', endDate: '2023-06-30', amount: '￥1000', state: '已缴纳', remarks: '',
//         payment: [{ id: '113333', beginDate: '2023-01-01', endDate: '2023-06-30', amount: '￥1000', state: '已逾期', paymentDate: '2024-5-1', remarks: '', link: 'wwww.baidu.com' }]
//       },
//       {
//         id: '4444', beginDate: '2023-07-01', endDate: '2023-12-31', amount: '￥1000', state: '未缴纳', remarks: '',
//         payment: [{ id: '1144444', beginDate: '2023-01-01', endDate: '2023-06-30', amount: '￥1000', state: '已逾期', paymentDate: '2024-5-1', remarks: '', link: 'wwww.baidu.com' }]
//       }
//     ],
//   }
// ];
const expandedRowKeys = ref<string[]>([])

// 处理行展开/收起的逻辑
const onExpandChange = (expanded: boolean, record: DataItem) => {
  if (expanded) {
    expandedRowKeys.value = [...expandedRowKeys.value, record.id]
  } else {
    expandedRowKeys.value = expandedRowKeys.value.filter((id) => id !== record.id)
  }
}

// ---------------------------
// const rowSelection = ref({
//     checkStrictly: false,
//     onChange: (selectedRowKeys: (string | number)[], selectedRows: DataItem[]) => {
//         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//     },
//     onSelect: (record: DataItem, selected: boolean, selectedRows: DataItem[]) => {
//         console.log(record, selected, selectedRows);
//     },
//     onSelectAll: (selected: boolean, selectedRows: DataItem[], changeRows: DataItem[]) => {
//         console.log(selected, selectedRows, changeRows);
//     },
// });
</script>
<style>
.tablestyle {
  background-color: lightgoldenrodyellow !important;
  border-top: 1px solid black;
}

.ant-table-thead {
  border-top: 1px solid black !important;
  background-color: bisque;
}

.tablestyle-div {
  max-height: 80vh;
  /* 使用视口高度的百分比 */
  overflow-y: auto;
  /* 开启垂直滚动条 */
}

.tablestyle2 {
  border-top: 5px solid black !important;
  /* background-color: lightblue !important; */
}

/* 设置打印页面的布局 */
body {
  height: auto;
  margin: 0px;
  padding: 0px;
  font-size: 12pt;
  /* 调整字体大小 */
  line-height: 1.5;
}

.ant-table {
  table-layout: fixed;
}

/* .ant-table-row {
  background-color: lightblue;
} */

.ant-table th,
.ant-table td {
  word-wrap: break-word;
  white-space: normal;
}

@media print {
  .innerc2-link,
  .operation,
  .ant-table-row-expand-icon {
    display: none !important;
  }

  .qishu {
    /* float: left; */
    position: relative;
    left: 0;
    padding-left: -20px;
  }

  /* 确保表格宽度自适应页面 */
  .ant-table {
    table-layout: fixed;
    width: 100%;
    font-size: 12px;
    /* 缩小字体以适应打印页 */
    overflow: hidden;
    /* 确保内容不会超出页面 */
  }

  /* 设置表头和单元格的 padding 和对齐方式 */
  .ant-table-cell {
    /* width: 5px !important; */
    padding: 15px !important;
    text-align: left;
    word-wrap: break-word;
    /* 自动换行，避免内容超出列宽 */
  }

  .ant-table-row {
    padding: 0px !important;
  }

  /* 
  tr {
      padding: 0px !important;
  } */

  /* 自动隐藏超出边界的内容，避免偏移 */
  body {
    height: auto;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
}

.ant-table-cell {
  padding: 10px !important;
  text-align: left;
  word-wrap: break-word;
  /* 自动换行，避免内容超出列宽 */
}

.innerc {
  color: lightcoral;
}
</style>
