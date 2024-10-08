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
      <template #expandedRowRender="{ record }">
        <!-- {{ record.plan.payment_detail_items }} -->
        <a-table
          size="small"
          :scroll="{ x: 800, y: 'auto' }"
          :row-class-name="'tablestyle2'"
          :columns="innerColumns"
          :data-source="record?.plan?.payment_detail_items"
          :pagination="false"
        >
          <template #bodyCell="{ column, text, index }">
            <template v-if="column.key === 'index'">
              <span>
                <a-tag color="blue">{{ index + 1 + '期-小计' }}</a-tag>
              </span>
            </template>

            <template v-if="column.key === 'state'">
              {{ column.key }}
              {{ text.state === '已逾期' }}
              <template v-if="text.state === '已逾期'">
                <a-badge status="error" />
                {{ text.state }}
              </template>
              <template v-else-if="text.state === '已缴纳'">
                <a-badge status="success" />
                {{ text.state }}
              </template>
              <template v-else-if="text.state === '未到日期'">
                <a-badge status="warning" />
                {{ text.state }}
              </template>
            </template>
          </template>
          <template #expandedRowRender="{ record, index: outerIndex }">
            <!-- {{ record.payment_plan_splits }} -->
            <a-table
              :scroll="{ x: 1000, y: 500 }"
              size="small"
              bordered
              :columns="inner2Columns"
              :data-source="record.payment_plan_splits"
              :pagination="false"
            >
              <template #bodyCell="{ column, text, index }">
                <template v-if="column.key === 'index'">
                  <span>
                    <a-tag color="blue">{{ outerIndex + 1 + '期' }}{{ '-' + (index + 1) }}</a-tag>
                  </span>
                </template>
                <template v-if="column.key === 'state'">
                  {{ text }}
                </template>
                <template v-else-if="column.key === 'operation'">
                  <span class="table-operation">
                    <a>Pause</a>
                    <a>Stop</a>
                    <a-dropdown>
                      <template #overlay>
                        <a-menu>
                          <a-menu-item>Action 1</a-menu-item>
                          <a-menu-item>Action 2</a-menu-item>
                        </a-menu>
                      </template>
                      <a>
                        More
                        <down-outlined />
                        <down-outlined />
                      </a>
                    </a-dropdown>
                  </span>
                </template>
              </template>
            </a-table>
          </template>
        </a-table>
      </template>
      <!-- edit end -->
    </a-table>
  </div>
</template>

<script lang="ts" setup>
import type { RPlanVO } from '@/2-biz-complex/services/vo/plan'
import { usePlanStore } from '@/stores'
import { useCommonStore } from '@/stores/common'
import { useHeaderStore } from '@/stores/header'
// import dayjs from 'dayjs';
import { onMounted, ref } from 'vue'
import { VuePrintNext } from 'vue-print-next'
import { DownOutlined } from '@ant-design/icons-vue'
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
  name: string
  area: string
  idcard: string
  platform: string
  code: string[]
  total_amount: string
  state: string
  payDate: string
  creator: string
  createdAt: string
  plan: RPlanVO[]
}

const columnsAlign = ref('left')
const innerColumnsAlign = ref('left')
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
    dataIndex: 'idcard',
    key: 'idcard',
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
const innerColumns = [
  {
    title: '期数',
    dataIndex: 'index',
    key: 'index',
    width: '12%',
    className: 'innerc',
    align: innerColumnsAlign.value
  },
  {
    title: '期间开始',
    dataIndex: 'beginDate',
    key: 'beginDate',
    width: '12%',
    className: 'innerc',
    align: innerColumnsAlign.value
  },
  {
    title: '期间结束',
    dataIndex: 'endDate',
    key: 'endDate',
    width: '15%',
    className: 'innerc',
    align: innerColumnsAlign.value
  },
  {
    title: '应收金额',
    dataIndex: 'amount',
    key: 'amount',
    width: '20%',
    className: 'innerc',
    align: innerColumnsAlign.value
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    key: 'remarks',
    width: '36%',
    align: innerColumnsAlign.value
  }
]

const inner2Columns = [
  {
    title: '分段',
    dataIndex: 'index',
    key: 'index',
    width: '12%',
    align: inner2ColumnsAlign.value
  },
  {
    title: '期间开始',
    dataIndex: 'beginDate',
    key: 'beginDate',
    width: '15%',
    align: inner2ColumnsAlign.value
  },
  {
    title: '期间结束',
    dataIndex: 'endDate',
    key: 'endDate',
    width: '15%',
    align: inner2ColumnsAlign.value
  },
  {
    title: '实收金额',
    dataIndex: 'amount',
    key: 'amount',
    width: '20%',
    align: inner2ColumnsAlign.value
  },
  {
    title: '状态',
    dataIndex: 'state',
    key: 'state',
    width: '10%',
    align: inner2ColumnsAlign.value
  },
  {
    title: '实际支付日期',
    dataIndex: 'paymentDate',
    key: 'paymentDate',
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

function transformAPIData(apiData: any[]): DataItem[] {
  return apiData.map((plan) => ({
    id: plan.id,
    name: plan.client.name, // 映射 API 数据中的 plan.client.name 到表格中的 name
    idcard: '', // 假设没有身份证字段，可以留空或者从 API 数据中找到合适的字段
    area: plan.total_area ? plan.total_area.toString() : '0',
    code: plan.unitys.map((unity: any) => unity.code), // 提取单元的 code 作为位置
    total_amount: `￥${plan.total_amount}`, // 将总金额格式化为金额字符串
    state: plan.contract_status === '1' ? '当期已缴纳' : '已逾期', // 状态的简单映射
    createdAt: plan.createdAt,
    platform: '', // 假设 platform 在 API 数据中没有，可以留空或者映射其他字段
    payDate: '', // 假设 payDate 在 API 数据中没有，可以留空或者映射其他字段
    creator: 'Jack', // 如果有创建者信息，可以从 API 数据中找到合适字段
    plan: plan
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

.ant-table-row {
  /* background-color: lightblue; */
}

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
