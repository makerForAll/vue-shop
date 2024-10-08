<template>
    <div>
        <slot name="headerHandle">
        </slot>
    </div>
    <hr>
    <a-table :scroll="{ x: 1200, y: 500 }" :columns="clientColumns" :row-key="(record: any) => record.id"
        :data-source="softwareStore?.data?.RItems" :pagination="pagination" :loading="loading"
        @change="handleTableChange">

        <template #bodyCell="{ column, text, index, record }">
            <!-- {{ record.name }} -->
            <div @mouseover="event => handleMouseOver(event, record.id, record.name)" @mouseleave="handleMouseLeave">
                <template v-if="column.dataIndex === 'index'">{{ index + 1 }}</template>
                <template v-else-if="column.dataIndex === 'url'">
                    {{ text }}
                </template>
                <template v-else-if="column.dataIndex === 'operation'">
                    <div class="editable-row-operations">
                        <slot name="operations">

                        </slot>
                    </div>
                </template> <!-- 操作阶段 end -->
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

import { computed, watch } from 'vue';
import type { TablePaginationConfig, TableProps } from 'ant-design-vue';
import { usePagination } from 'vue-request';
// import { clientColumns, type APIParams, type Client,  } from '@/api/services/client'
// import apiClient from '@/api/services/client'
const getUrl = window.location.href;
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
        title: '软件名称',
        dataIndex: 'name',
        sorter: true,
        width: '20%',
        fixed: 'left'
    }, {
        title: '链接',
        dataIndex: 'url',
        sorter: true,
        width: '10%',
        fixed: 'left'
    },
    {
        title: '备注',
        dataIndex: 'marks',
        width: '15%',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        fixed: 'right',
        width: '30%',
    },
];

import { useSoftwareStore } from '@/stores/software';
const softwareStore = useSoftwareStore();

// ---------------------------------------------------------------



const handleMouseOver = async (event: MouseEvent, id: string, name: string) => {
    console.log('Hovered over row with ID:', id);
    await softwareStore.updateSelectID(id, name);
}

const handleMouseLeave = async () => {

    console.log('Mouse left the row');
};

watch(
    () => softwareStore.data.tabsKey,
    (newValue) => {
        console.log(`tabsKey changed from to ${newValue}`);
        run({
            current: 1,
            pagesize: 10,
        }, {
            tags: [softwareStore.data.tabsKey]
        });
    },
    // {
    //   deep: true,
    //   // immediate: true
    // } // 深度监听
)

const queryData = async (params: any, filters: any): Promise<void> => {
    // console.log("url:", props.tags);

    console.log("params--", params);
    if (params) {
        // , { tags: 1 }
        // console.log("clientStore.getKeyToState", clientStore.getKeyToState);
        // await partyStore.read(params, filters ? filters : { tags: 0 });
        await softwareStore.read(params, filters);
    }
    // { tags: clientStore.getKeyToState }
};


// --------------------------------------------------------------------------------

const {
    run,
    loading,
    current,
    pageSize,
} = usePagination(queryData, {
    onSuccess(data, params) {
        console.log(data, params);
    },
    pagination: {
        currentKey: 'current',
        pageSizeKey: 'pagesize',
        totalKey: 'total',
        totalPageKey: 'totalPage'
    },
});

const pagination = computed(() => ({
    total: softwareStore.data.total,
    current: current.value,
    pageSize: pageSize.value,
    // searchText: state.searchText
}));

const handleTableChange: TableProps['onChange'] = (
    pag: TablePaginationConfig,
    filters: any,
    sorter: any,
) => {
    console.log('params----------------@', pagination, filters, sorter);
    run({
        pagesize: pag.pageSize,
        current: pag?.current,
        sortField: sorter.field,
        sortOrder: sorter.order,

    }, { ...filters });
};

</script>