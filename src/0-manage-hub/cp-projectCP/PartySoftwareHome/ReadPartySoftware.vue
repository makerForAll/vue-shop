<template>
  <div>
    <slot name="headerHandle"> </slot>
  </div>
  <hr />
  <a-table
    :scroll="{ x: 1200, y: 500 }"
    :columns="clientColumns"
    :row-key="(record: any) => record.id"
    :data-source="store?.data?.RItems"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template #bodyCell="{ column, text, index, record }">
      <!-- {{ record.name }} -->
      <div
        @mouseover="(event) => handleMouseOver(event, record.id, record.name)"
        @mouseleave="handleMouseLeave"
      >
        <template v-if="column.dataIndex === 'index'">{{ index + 1 }}</template>
        <template v-else-if="column.dataIndex === 'url'">
          {{ text }}
        </template>
        <template v-else-if="column.dataIndex === 'partyId'">
          <!-- {{ record.party.name }} -->
        </template>
        <template v-else-if="column.dataIndex === 'softwareId'">
          <!-- {{ record.software.name }} -->
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
          <div class="editable-row-operations">
            <slot name="operations" :record="record"> </slot>
          </div>
        </template>
        <!-- 操作阶段 end -->
        <!-- <template v-else-if="column.dataIndex === 'tags'">
                    {{
                        filtesrTags?.[text]?.text
                    }}{{ text }}
                </template> -->
        <template v-else>
          {{ text }}
        </template>
      </div>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import type { TablePaginationConfig, TableProps } from 'ant-design-vue'
import { usePagination } from 'vue-request'
// import { clientColumns, type APIParams, type Client,  } from '@/api/services/client'
// import apiClient from '@/api/services/client'
const getUrl = window.location.href

import { usePartyStore } from '@/stores/party'
const partyStore = usePartyStore()
// const partyOptions = ref<{ value: string | undefined; label: string }[]>([]);

onMounted(async () => {
  const partyData = await partyStore.read() // 确保使用 await 等待 Promise 解决
  if (partyData) {
    store.data.partyItems = partyData.map((item) => ({
      value: item.id,
      label: item.name
    }))
  }
})

import { useSoftwareStore } from '@/stores/software'
const SoftwareStore = useSoftwareStore()
// const softwareOptions = ref<{ value: string | undefined; label: string }[]>([]);
onMounted(async () => {
  const softwareData = await SoftwareStore.read() // 确保使用 await 等待 Promise 解决
  if (softwareData) {
    store.data.softwareItems = softwareData.map((item) => ({
      value: item.id,
      label: item.name
    }))
  }
})
// const filtesrTags = [
//     {
//         value: 0,
//         text: '待服务',
//     },
//     {
//         value: 1,
//         text: '近期沟通中',
//     }, {
//         value: 2,
//         text: '预计签合同',
//     }, {
//         value: 3,
//         text: '近期已签',
//     }, {
//         value: 4,
//         text: '归档客户',
//     },]

const clientColumns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: '6%',
    fixed: 'left'
  },
  {
    title: '公司-软件',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    fixed: 'left'
  },
  {
    title: '链接',
    dataIndex: 'url',
    sorter: true,
    width: '10%',
    fixed: 'left'
  },
  {
    title: '甲方id',
    dataIndex: 'partyId',
    // sorter: true,
    width: '10%',
    fixed: 'left'
  },
  {
    title: '软件id',
    dataIndex: 'softwareId',
    // sorter: true,
    width: '10%',
    fixed: 'left'
  },
  {
    title: '是否禁止',
    dataIndex: 'disabled',
    // sorter: true,
    width: '10%',
    fixed: 'left'
  },
  {
    title: '备注',
    dataIndex: 'marks',
    width: '15%'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    fixed: 'right',
    width: '30%'
  }
]

import { usePartySoftwareStore } from '@/stores/partysoftware'
const store = usePartySoftwareStore()

// ---------------------------------------------------------------

const handleMouseOver = async (event: MouseEvent, id: string, name: string) => {}

const handleMouseLeave = async () => {
  // await store.clearSelectID();
  console.log('Mouse left the row')
}

watch(
  () => store.data.tabsKey,
  (newValue) => {
    console.log(`tabsKey changed from to ${newValue}`)
    run(
      {
        current: 1,
        pagesize: 10
      },
      {
        tags: [store.data.tabsKey]
      }
    )
  }
  // {
  //   deep: true,
  //   // immediate: true
  // } // 深度监听
)

const queryData = async (params: any, filters: any): Promise<void> => {
  console.log('params--', params)
  try {
    if (params) {
      await store.read(params, filters)
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
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
  total: store.data.total,
  current: current.value,
  pageSize: pageSize.value
  // searchText: state.searchText
}))

const handleTableChange: TableProps['onChange'] = (
  pag: TablePaginationConfig,
  filters: any,
  sorter: any
) => {
  console.log('Table change params:', pag, filters, sorter)
  run(
    {
      pagesize: pag.pageSize,
      current: pag?.current,
      sortField: sorter.field,
      sortOrder: sorter.order
    },
    { ...filters }
  )
}
</script>
