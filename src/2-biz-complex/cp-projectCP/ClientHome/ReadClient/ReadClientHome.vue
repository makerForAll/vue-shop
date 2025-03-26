<style>
@media print {
  .non-printable-content,
  .ant-table-column-sorter,
  .ant-table-filter-trigger,
  .operation {
    display: none !important;
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

  /* 自定义表格单元格的边框样式 */
  .custom-bordered-table .ant-table-tbody > tr > td {
    border: 1px solid #d9d9d9;
    /* 自定义单元格的边框颜色和样式 */
  }

  .custom-bordered-table .ant-table-thead > tr > th {
    border: 1px solid #d9d9d9;
    /* 自定义表头的单元格边框 */
  }

  .custom-bordered-table .ant-table-container table {
    border-collapse: collapse;
    /* 确保边框不重叠 */
  }

  /* .custom-bordered-table .ant-table-tbody>tr>td {
  border: 1px solid #d9d9d9;
} */
  .ant-table-tbody > tr > td,
  .ant-table-thead > tr > th {
    border: 1px solid black;
  }

  .ant-spin-container {
    padding: 10px;
  }

  .ant-pagination {
    margin-top: 10px;
  }

  /**/

  .table-container {
    position: relative;
    padding-bottom: 60px;
    /* 给分页组件预留空间 */
  }

  .a-table {
    max-height: calc(200vh - 10px);
    /* 根据页面高度调整 */
    overflow-y: auto;
    /* 启用垂直滚动条 */
  }

  /* ------ */

  .row-status-pending {
    background-color: #cccccc !important;
    /* 灰色 */
  }

  .row-status-intention {
    background-color: #ffffcc !important;
    /* 绿色 */
  }

  .row-status-waiting {
    background-color: #ccff99 !important;
    /* 橙色 */
  }

  .row-status-signed {
    background-color: #ccffff !important;
    /* 蓝色 */
  }

  .row-status-archived {
    background-color: #ffcccc !important;
    /* 红色 */
  }
}

.pagination-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  text-align: center;
  padding: 10px 0;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
}
</style>
<template>
  <div>
    <div>
      <!-- {{ props.partyId }} -->
      <a-space :size="'middle'">
        <slot name="headerHandle"> </slot>
        <a-button @click="handlePrint('ReadClientHome')">打印表格</a-button>
      </a-space>
    </div>
    <hr />

    <a-table
      :rowClassName="setRowClass"
      :data-orientation="commonStore.printOrientation"
      style="padding: 5px"
      size="small"
      :bordered="true"
      id="printMeReadClientHome"
      :scroll="{ x: 1200, y: 500 }"
      :columns="clientColumns"
      :row-key="(record: any) => record.id"
      :data-source="clientStore?.data?.RItems"
      :pagination="false"
      :loading="loading"
      @change="handleTableChange"
    >
      <!-- <template #title>
      <h1>客户清单</h1>
    </template> -->
      <!-- <template #footer>Footer</template> -->
      <template #bodyCell="{ column, text, index, record }">
        <!-- {{ record.name }} -->
        <div
          @mouseover="(event) => handleMouseOver(event, record.id, record.name, record)"
          @mouseleave="handleMouseLeave"
        >
          <template v-if="column.dataIndex === 'index'">{{ index + 1 }}</template>

          <template v-else-if="column.dataIndex === 'createdAt'">
            <!-- {{ formatCreatedAt(text) }} -->
            {{ clientStore.formatCreatedAt(text) }}
          </template>
          <template v-else-if="column.dataIndex === 'operation'">
            <a-space :size="'smail'" class="editable-row-operations">
              <slot name="operations-readClient"></slot>
            </a-space>
          </template>
          <!-- 操作阶段 end -->
          <template v-else-if="column.dataIndex === 'tags'">
            <a-tag :key="record.id" :color="getTagColor(filtesrTags?.[text]?.text)">
              {{ filtesrTags?.[text]?.text }}
            </a-tag>
          </template>
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
    </a-table>

    <a-pagination
      v-model:current="current"
      :total="clientStore.data.total"
      class="pagination-bottom"
    >
      <template #itemRender="{ type, originalElement }">
        <a v-if="type === 'prev'">Previous</a>
        <a v-else-if="type === 'next'">Next</a>
        <component :is="originalElement" v-else></component>
      </template>
    </a-pagination>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, watch } from 'vue'
import type { TablePaginationConfig, TableProps } from 'ant-design-vue'
import { usePagination } from 'vue-request'
import { VuePrintNext } from 'vue-print-next'
import { useCommonStore } from '@/stores/common'
const commonStore = useCommonStore()
function handlePrint(id: string) {
  commonStore.insertDynamicCSS('landscape')
  new VuePrintNext({ el: `#printMe${id}` /** 其他参数 */ })
}
// import { clientColumns, type APIParams, type Client,  } from '@/api/services/client'
// import apiClient from '@/api/services/client'
const getTagColor = (tag: string): string => {
  // 定义标签和颜色的映射关系
  const colorMap: { [key: string]: string } = {
    待定: 'gray',
    意向: 'orange',
    待签: 'green',
    // '已签': 'blue',
    已归档: 'red'
    // 添加更多标签和对应的颜色
  }
  // 返回对应的颜色，如果标签不存在则返回默认颜色
  return colorMap[tag] || 'default'
}

const setRowClass = (record: any) => {
  const tag = record.tags // 假设 tags 是数字类型
  switch (tag) {
    case 0:
      return 'row-status-pending' // 待定
    case 1:
      return 'row-status-intention' // 意向
    case 2:
      return 'row-status-waiting' // 待签
    // case 3:
    //   return 'row-status-signed'; // 已签
    case 3:
      return 'row-status-archived' // 已归档
    default:
      return ''
  }
}
const filtesrTags = [
  {
    value: 0,
    text: '待定'
  },
  {
    value: 1,
    text: '意向'
  },
  {
    value: 2,
    text: '待签'
  },
  // {
  //   value: 3,
  //   text: '已签',
  // },
  {
    value: 3,
    text: '已归档'
  }
]

const clientColumns = [
  {
    title: '标签',
    dataIndex: 'tags',
    width: '15%',
    // key:'tags!',
    sorter: true,
    filters: filtesrTags
    // fixed: 'left',
    // onFilter: (value: any, record: { tags: string | any[]; }) => record.tags.indexOf(value) === 1,
  },
  {
    title: '序号',
    dataIndex: 'index',
    width: '12%'
    // fixed: 'left'
  },
  {
    title: '客户名称',
    dataIndex: 'name',
    width: '25%'
    // fixed: 'left'
  },
  {
    title: '联系方式',
    dataIndex: 'phonenumber',
    width: '18%'
  },
  // {
  //   title: '紧急联系人',
  //   dataIndex: 'emergencycontact',
  //   width: '20%',
  // }, {
  //   title: '紧急联系人电话',
  //   dataIndex: 'emergencycontactphone',
  //   width: '25%',
  // },
  {
    title: '业务',
    dataIndex: 'business',
    width: '15%'
  },
  {
    title: '需求',
    dataIndex: 'usage',
    width: '18%'
  },
  // {
  //   title: '注册时间',
  //   dataIndex: 'createdAt',
  //   width: '25%',
  //   // customRender: ({ text }: { text: string }) => formatDate(new Date(text)) // 本地化显示
  // },
  {
    title: '备注',
    dataIndex: 'marks',
    width: '30%'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    // fixed: 'right',
    width: '35%',
    className: 'operation'
  }
]

// import axios from '@/api/request'
// import { APIforBackEnd} from '@/api'
// import {AxiosHttpRequest } from '@/api/core/AxiosHttpRequest';
// const api = new APIforBackEnd({},AxiosHttpRequest);

import { useClientStore } from '@/stores/client'
const clientStore = useClientStore()

// import { usePartyStore } from '@/stores/party'
// const partyStore = usePartyStore();

// onMounted(async ()=>{
//   await clientStore.initStateItem(); // 初始化
//   // console.log("data::-------------",clientStore.clientData.items);
// })
// const props = defineProps<{ tags: number }>();

// onMounted(() => {
//   if (!clientStore.data.RItems.length) {
//     // 如果没有数据，则从 API 获取
//     run({
//       current: 1,
//       pagesize: 10,
//     },
//       {
//         tags: [0, 1, 2, 3]
//       }
//     );
//   } else {
//     // 如果 Pinia 已经有数据，直接使用 Pinia 的数据
//     // dataSource.value = store.clientData;
//   }
// })

// 监听 props.tags 的变化
// watch(() => props.tags, (newTags) => {
//   console.log('Tags changed:', newTags);
//   run({
//     pagesize: pagination.value.pageSize,
//     current: pagination.value.current,
//     tags: newTags
//   });
//   console.log("newTags:", newTags);

// });

// import axios from 'axios';
// import { HttpClient } from '@/generated/http-client';
// import { Api } from '@/generated/Api';

const props = defineProps<{
  // handleMouseOver: (event: MouseEvent,id: string) => void;
  // handleMouseLeave: () => void;
  // queryData: (params: APIParams) => Promise<void>;
  partysoftwareId: string
}>()
// const formatCreatedAt = (date: dayjs.Dayjs | null) => {
//   return date ? date.format('YYYY-MM-DD HH:mm:ss') : 'N/A';
// };
// ---------------------------------------------------------------
// import { DownOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue'
import type { RClientVO } from '@/2-biz-complex/services/vo/client'
const handleMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e)
}

const handleMouseOver = async (event: MouseEvent, id: string, name: string, obj: RClientVO) => {
  console.log('Hovered over row with ID:', id)
  // 需要优化
  // clientStore.data.selectID = id;
  await clientStore.updateSelectID(id, name, obj)
  // clientStore.deleteState.selectID = id;
  // clientStore.readState.selectID = id;
}

const handleMouseLeave = async () => {
  // clientStore.data.selectID = '';
  // await clientStore.clearSelectID();
  console.log('Mouse left the row')
}

// export interface APIParams {
// 	// 传入 queryData 的参数
// 	current?: number;
// 	pageSize?: number;
// 	state?: number;
// 	'region[]'?:string;
// }

// watch(() => clientStore.data.tabsKey, (newVal, oldVal) => {
//   console.log(`tabsKey changed from ${oldVal} to ${newVal}`);
//   // run({
//   //   current: 1,
//   //   pagesize: 10,
//   //   tags: newVal
//   // });
// });

// watch(
//   () => clientStore.data.tabsKey,
//   (newVal, oldVal) => {
//     console.log(`tabsKey changed from ${oldVal} to ${newVal}`);
//     // run({
//     //   current: 1,
//     //   pagesize: 10,
//     //   tags: newVal
//     // });
//   }
// );

// watch(
//   () => clientStore.data.tabsKey,
//   (newValue) => {
//     console.log(`tabsKey changed from to ${newValue}`);
//     run({
//       current: 1,
//       pagesize: 10,

//     }, {
//       tags: [clientStore.data.tabsKey]
//     });
//   },
//   // {
//   //   deep: true,
//   //   // immediate: true
//   // } // 深度监听
// )

const queryData = async (params: any, filters: any): Promise<void> => {
  // console.log("url:", props.tags);

  console.log('params--', params)
  if (params) {
    // , { tags: 1 }
    // console.log("clientStore.getKeyToState", clientStore.getKeyToState);
    // await clientStore.read(params, filters ? filters : { tags: 0 });
    // await clientStore.read(params);
    // await clientStore.readClientsByPartyId(props.partyId, params, filters ? filters : { tags: 0 });
    console.log('props.partysoftwareId:', props.partysoftwareId)

    await clientStore.readClientsByFieldId(
      props.partysoftwareId,
      params,
      filters ? filters : { tags: [0, 1, 2, 3] }
    )
  }
  // { tags: clientStore.getKeyToState }
}

const { run, loading, current, pageSize } = usePagination(queryData, {
  onSuccess(data, params) {
    console.log(data, params)
  },
  pagination: {
    currentKey: 'current',
    pageSizeKey: 'pagesize',
    totalKey: 'total',
    totalPageKey: 'totalPage'
  },
  refreshOnWindowFocus: true,
  refocusTimespan: 10 * 1000 // 2s
  // manual: true // 禁止自动请求
})

const pagination = computed(() => ({
  total: clientStore.data.total,
  current: current.value,
  pageSize: pageSize.value
  // searchText: state.searchText
}))

const handleTableChange: TableProps['onChange'] = (
  pag: TablePaginationConfig,
  filters: any,
  sorter: any
) => {
  console.log('params----------------@', pagination, filters, sorter)
  // 转换 sortOrder 为后端期望的格式
  // const sortOrder = sorter.order === 'ascend' ? 'ASC' : sorter.order === 'descend' ? 'DESC' : undefined;

  // 获取当前的查询参数
  const currentParams = {
    pagesize: pag.pageSize,
    current: pag?.current,
    sortField: sorter.field,
    sortOrder: sorter.order === 'ascend' ? 'ASC' : sorter.order === 'descend' ? 'DESC' : undefined,
    ...filters
  }
  console.log('filters:', filters)

  // 调用函数执行请求，保留现有的过滤器和排序条件
  run(currentParams, filters)
}
</script>
