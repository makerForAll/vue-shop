<template>
  <div>
    <slot name="headerHandle"> </slot>
  </div>
  <hr />
  <a-table
    bordered
    :scroll="{ x: 1200, y: 500 }"
    :columns="clientColumns"
    :row-key="(record: any) => record.id"
    :data-source="partyStore?.data?.RItems"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'name'">
        {{ record.name }}
      </template>
      <template v-else>
        <!-- {{ column.dataIndex }} -->
        <div
          v-for="item in filteredSoftware(record.partySoftware, column.dataIndex)"
          :key="item.id"
        >
          <!-- {{ item.software.id }} -->
          <!-- {{ item.disabled }} -->
          <a-button :disabled="item.disabled" @click="navigateTo(item)">
            {{ item.name }}[链接]
            <!-- <a :href="`partysoftware/${item?.id}/`">{{ item.name }}[链接]</a> -->
          </a-button>
        </div>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue'
import type { TablePaginationConfig, TableProps } from 'ant-design-vue'
import { usePagination } from 'vue-request'

// const getUrl = window.location.href;
// 计算属性：根据列名过滤 partySoftware
const filteredSoftware = (partySoftware: any[], softwareType: any) => {
  return partySoftware.filter((software) => software.software.name === softwareType)
}
const clientColumns = [
  {
    title: '序号',
    dataIndex: 'sorting',
    // sorter: (a: any, b: any) => b.sorting - a.sorting,  // 降序排序
    sorter: true,
    width: '8%',
    fixed: 'left'
  },
  {
    title: '公司名称',
    dataIndex: 'name',
    // sorter: true,
    width: '23%',
    fixed: 'left'
  },
  {
    title: '1级资产运营软件',
    dataIndex: '1级资产运营软件',
    key: 'level1'
  },
  {
    title: '2级资产运营软件_1',
    dataIndex: '2级资源运营软件_1',
    key: 'level2'
  },
  {
    title: '2级资产运营软件_2',
    dataIndex: '2级资产运营软件_2',
    key: 'level2'
  },
  {
    title: '3级运营',
    dataIndex: '3级运营',
    key: 'level3'
  }
]

import { usePartyStore } from '@/stores/party'
const partyStore = usePartyStore()

// ---------------------------------------------------------------
const navigateTo = (item: any) => {
  if (item) {
    const domain = window.location.origin // 获取当前域名（例如：http://localhost:5173）
    const url = `${domain}/partysoftware/${item?.id}/` // 拼接完整的 URL
    window.location.href = url // 进行跳转
  }
}

// const handleMouseOver = async (event: MouseEvent, id: string, name: string) => {
//     console.log('Hovered over row with ID:', id);
//     await partyStore.updateSelectID(id, name);
// }

// const handleMouseLeave = async () => {

//     console.log('Mouse left the row');
// };

watch(
  () => partyStore.data.tabsKey,
  (newValue) => {
    console.log(`tabsKey changed from to ${newValue}`)
    run(
      {
        current: 1,
        pagesize: 10
      },
      {
        tags: [partyStore.data.tabsKey]
      }
    )
  }
  // {
  //   deep: true,
  //   // immediate: true
  // } // 深度监听
)

const queryData = async (params: any, filters: any): Promise<void> => {
  // console.log("url:", props.tags);

  console.log('params--', params)
  if (params) {
    // , { tags: 1 }
    // console.log("clientStore.getKeyToState", clientStore.getKeyToState);
    // await partyStore.read(params, filters ? filters : { tags: 0 });
    await partyStore.read(params)
  }
  // { tags: clientStore.getKeyToState }
}

// --------------------------------------------------------------------------------

const { run, loading, current, pageSize } = usePagination(queryData, {
  onSuccess(data, params) {
    console.log(data, params)
  },
  pagination: {
    currentKey: 'current',
    pageSizeKey: 'pagesize',
    totalKey: 'total',
    totalPageKey: 'totalPage'
  }
})

const pagination = computed(() => ({
  total: partyStore.data.total,
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

  // 获取当前的查询参数
  const currentParams = {
    pagesize: pag.pageSize,
    current: pag?.current,
    sortField: sorter.field,
    sortOrder: sorter.order === 'ascend' ? 'ASC' : sorter.order === 'descend' ? 'DESC' : undefined,
    ...filters
  }
  run(
    {
      ...currentParams
    },
    { ...filters }
  )
}
</script>
