<template>
    <a-space :size="'middle'">
        <slot name="headerHandle">
        </slot>
        <a-button @click="handlePrint('ReadClientFinanceHome')">打印表格</a-button>
    </a-space>
    <div class="tablestyle-div">
        <a-table size="small" id="printMeReadClientFinanceHome" @expand="onExpandChange" :row-class-name="'tablestyle'"
            :columns="columns" :data-source="data" class="components-table-demo-nested">
            <template #bodyCell="{ column, text, index }">
                <template v-if="column.key === 'operation'">
                    <a>Publish</a>
                </template>
                <template v-if="column.key === 'code'">
                    <template v-for="item in text" :key="item.id">
                        <a-tag color="blue">{{ item }}</a-tag>
                    </template>
                </template>
                <template v-if="column.key === 'state'">
                    <template v-if="text === '已逾期'">
                        <a-badge status="error" />
                        {{ text }}
                    </template>
                    <template v-else-if="text === '当期已缴纳'">
                        <a-badge status="success" />
                        {{ text }}
                    </template>
                </template>
            </template>
            <template #expandedRowRender="{ record }">
                <a-table size="small" :scroll="{ x: 800, y: 300 }" :row-class-name="'tablestyle2'"
                    :columns="innerColumns" :data-source="record.plan" :pagination="false">
                    <template #bodyCell="{ column, text, index }">
                        <template v-if="column.key === 'index'">
                            <span>

                                <a-tag color="blue">{{ (index + 1) + '期-小计' }}</a-tag>
                            </span>
                        </template>

                        <template v-if="column.key === 'state'">
                            <!-- {{ column.key }} -->
                            <!-- {{ text.state === '已逾期' }} -->
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
                    <template #expandedRowRender="{ record, index: outerIndex }">
                        <a-table size="small" bordered :columns="inner2Columns" :data-source="record.payment"
                            :pagination="false">
                            <template #bodyCell="{ column, text, index }">
                                <template v-if="column.key === 'index'">
                                    <span>
                                        <a-tag color="blue">{{ (outerIndex + 1) + '期' }}{{ '-' + (index + 1) }}</a-tag>

                                    </span>
                                </template>

                                <template v-if="column.key === 'state'">
                                    <!-- {{ column.key }} -->
                                    <!-- {{ text.state === '已逾期' }} -->
                                    <!-- 2 -->
                                    <!-- {{ text }} -->
                                    <template v-if="text === '已逾期'">
                                        <a-badge status="error" />
                                        <!-- {{ text.state }} -->
                                    </template>
                                    <template v-else-if="text === '已缴纳'">
                                        <a-badge status="success" />
                                        <!-- {{ text.state }} -->
                                    </template>
                                    <template v-else-if="text === '未到日期'">
                                        <a-badge status="warning" />
                                        <!-- {{ text.state }} -->
                                    </template>
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
        </a-table>
    </div>

</template>

<script lang="ts" setup>
import { usePlanStore } from '@/stores';
import { useCommonStore } from '@/stores/common';
import { useHeaderStore } from '@/stores/header';
import { onMounted, ref } from 'vue';
import { VuePrintNext } from 'vue-print-next'
import { DownOutlined } from '@ant-design/icons-vue';
const commonStore = useCommonStore();

const isPrinting = ref(false);
function handlePrint(id: string) {
    isPrinting.value = true;
    commonStore.insertDynamicCSS('landscape');
    new VuePrintNext({ el: `#printMe${id}` /** 其他参数 */ })
}
// 定义数据类型
interface PaymentItem {
    id: string;
    beginDate: string;
    endDate: string;
    amount: string;
    state: string;
    paymentDate: string;
    remarks: string;
    link: string;
}

interface PlanItem {
    id: string;
    beginDate: string;
    endDate: string;
    amount: string;
    state: string;
    remarks: string;
    payment: PaymentItem[];
}


interface DataItem {
    id: string;
    name: string;
    area: string;
    idcard: string;
    platform: string;
    code: string[];
    amount: string;
    state: string;
    payDate: string;
    creator: string;
    createdAt: string;
    plan: PlanItem[]
}


const columnsAlign = ref('left');
const innerColumnsAlign = ref('left');
const inner2ColumnsAlign = ref('center');

const columns = [
    // {title:'序号'},
    {
        title: '客户名称', dataIndex: 'name', key: 'name', width: '90px', align: columnsAlign.value
    },
    { title: '身份证号', dataIndex: 'idcard', key: 'idcard', width: '190px', align: columnsAlign.value },
    { title: '面积', dataIndex: 'area', key: 'area', width: '70px', align: columnsAlign.value },
    { title: '位置', dataIndex: 'code', key: 'code', width: '220px', align: columnsAlign.value },
    { title: '累计欠缴金额', dataIndex: 'amount', key: 'amount', width: '120px', align: columnsAlign.value },
    // { title: '累计缴纳截止日期', dataIndex: 'payDate', key: 'payDate', width: '150px', align: columnsAlign.value },
    // { title: '当期缴纳状态', dataIndex: 'state', key: 'state', width: '100px', align: columnsAlign.value },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt', align: columnsAlign.value },
    { title: 'Action', key: 'operation', width: '80px', className: 'operation', align: columnsAlign.value },
];

// 嵌套表格列（展开后的表格显示的列）
const innerColumns = [
    { title: '期数', dataIndex: 'index', key: 'index', width: '12%', className: 'innerc', align: innerColumnsAlign.value },
    { title: '期间开始', dataIndex: 'beginDate', key: 'beginDate', width: '12%', className: 'innerc', align: innerColumnsAlign.value },
    { title: '期间结束', dataIndex: 'endDate', key: 'endDate', width: '15%', className: 'innerc', align: innerColumnsAlign.value },
    { title: '应收金额', dataIndex: 'amount', key: 'amount', width: '20%', className: 'innerc', align: innerColumnsAlign.value },
    { title: '备注', dataIndex: 'remarks', key: 'remarks', width: '46%', align: innerColumnsAlign.value }
];

const inner2Columns = [
    { title: '分段', dataIndex: 'index', key: 'index', width: '12%', align: inner2ColumnsAlign.value },
    { title: '期间开始', dataIndex: 'beginDate', key: 'beginDate', width: '15%', align: inner2ColumnsAlign.value },
    { title: '期间结束', dataIndex: 'endDate', key: 'endDate', width: '15%', align: inner2ColumnsAlign.value },
    { title: '实收金额', dataIndex: 'amount', key: 'amount', width: '20%', align: inner2ColumnsAlign.value },
    { title: '状态', dataIndex: 'state', key: 'state', width: '5%', align: inner2ColumnsAlign.value },
    { title: '实际支付日期', dataIndex: 'paymentDate', key: 'paymentDate', width: '15%', align: inner2ColumnsAlign.value },
    { title: '备注', dataIndex: 'remarks', key: 'remarks', width: '46%', align: inner2ColumnsAlign.value },
    { title: '依据链接', dataIndex: 'link', key: 'link', width: '1%', className: 'innerc2-link', align: inner2ColumnsAlign.value }

];
// ------------------------------------------------------------------

const planStore = usePlanStore();
const headerStore = useHeaderStore();
onMounted(() => {
    planStore.readByPartySoftwareId(headerStore.partysoftwareId);
})
// 主表数据
const data: DataItem[] = [
    {
        id: '1',
        name: `客户 ${0 + 1}`,
        area: '512',
        idcard: '123456789012345678',
        code: ['14#01-01', '14#01-02', '14#01-03', '14#01-04'],
        amount: '￥ 0',
        state: '当期已缴纳', // 计算函数
        payDate: '2015-11-24',
        creator: 'Jack',
        createdAt: '2014-12-24',
        platform: '',
        plan: [
            {
                id: '11', beginDate: '2023-01-01', endDate: '2023-06-30', amount: '￥1000', state: '已缴纳', remarks: ''
                , payment: [{ id: '11111', beginDate: '2023-01-01', endDate: '2023-06-30', amount: '￥1000', state: '已缴纳', paymentDate: '2024-5-1', remarks: '', link: 'wwww.baidu.com' }, { id: '11111', beginDate: '2023-01-01', endDate: '2023-06-30', amount: '￥1000', state: '已缴纳', paymentDate: '2024-5-1', remarks: '', link: 'wwww.baidu.com' }]
            },
            {
                id: '22', beginDate: '2023-07-01', endDate: '2023-12-31', amount: '￥1000', state: '未缴纳', remarks: '',
                payment: [{ id: '22222', beginDate: '2023-01-01', endDate: '2023-06-30', amount: '￥1000', state: '已缴纳', paymentDate: '2024-5-1', remarks: '', link: 'wwww.baidu.com' }]
            }
        ],
    },
    {
        id: '2',
        name: `客户 ${1 + 1}`,
        area: '135',
        idcard: '123456789012345678',
        // code: '10#01-01',
        code: ['10#01-01', '10#01-02'],
        amount: '￥ 568.08',
        state: '已逾期',
        payDate: '2015-11-24',
        creator: 'Jack',
        createdAt: '2014-12-24',
        platform: '',
        plan: [
            {
                id: '3333', beginDate: '2023-01-01', endDate: '2023-06-30', amount: '￥1000', state: '已缴纳', remarks: '',
                payment: [{ id: '113333', beginDate: '2023-01-01', endDate: '2023-06-30', amount: '￥1000', state: '已缴纳', paymentDate: '2024-5-1', remarks: '', link: 'wwww.baidu.com' }]
            },
            {
                id: '4444', beginDate: '2023-07-01', endDate: '2023-12-31', amount: '￥1000', state: '未缴纳', remarks: '',
                payment: [{ id: '1144444', beginDate: '2023-01-01', endDate: '2023-06-30', amount: '￥1000', state: '已缴纳', paymentDate: '2024-5-1', remarks: '', link: 'wwww.baidu.com' }]
            }
        ],
    }
];
const expandedRowKeys = ref<string[]>([]);

// 处理行展开/收起的逻辑
const onExpandChange = (expanded: boolean, record: DataItem) => {
    if (expanded) {
        expandedRowKeys.value = [...expandedRowKeys.value, record.id];
    } else {
        expandedRowKeys.value = expandedRowKeys.value.filter(id => id !== record.id);
    }
};

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
    background-color: bisque
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