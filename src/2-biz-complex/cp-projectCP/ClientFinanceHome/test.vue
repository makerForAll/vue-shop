<template>
    <div class="tablestyle-div">
        <a-table :row-class-name="'tablestyle'" :columns="columns" :data-source="data"
            class="components-table-demo-nested" :scroll="{ x: 1300, y: 1000 }">
            <template #bodyCell="{ column, text }">
                <template v-if="column.key === 'operation'">
                    <a>Publish</a>
                </template>
                <template v-if="column.key === 'code'">

                    <template v-for="item in text" :key="item">
                        <div>
                            <a-tag color="blue">{{ item }}</a-tag>
                        </div>
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
            <template #expandedRowRender>
                <a-table :columns="innerColumns" :data-source="innerData2" :pagination="false">
                    <template #bodyCell="{ column, text }">
                        <template v-if="column.key === 'index'">
                            <span>
                                <a-tag color="blue">{{ text }}</a-tag>
                            </span>
                        </template>

                        <template v-if="column.key === 'state'">
                            <!-- {{ column.key }} -->
                            <!-- {{ text.state === '已逾期' }} -->
                            <template v-if="text.state === '已逾期'">
                                <a-badge status="error" />
                                {{ text.state }}
                            </template>
                            <template v-else-if="text.state === '当期已缴纳'">
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
                                    </a>
                                </a-dropdown>
                            </span>
                        </template>
                    </template>
                </a-table>
            </template>
        </a-table>
    </div>

</template>
<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue';
const columns = [
    { title: '客户名称', dataIndex: 'name', key: 'name' },
    { title: '身份证号', dataIndex: 'idcard', key: 'idcard' },
    { title: '面积', dataIndex: 'area', key: 'area' },
    { title: '位置', dataIndex: 'code', key: 'code' },
    { title: '累计欠缴金额', dataIndex: 'amount', key: 'amount' },
    { title: '累计缴纳截止日期', dataIndex: 'payDate', key: 'payDate' },
    { title: '当期缴纳状态', dataIndex: 'state', key: 'state' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation' },
];

interface DataItem {
    key: number;
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
}

const data: DataItem[] = [];
// for (let i = 0; i < 3; ++i) {
data.push({
    key: 1,
    name: `客户 ${0 + 1}`,
    area: '512',
    idcard: '123456789012345678',
    code: ['14#01-01', '14#01-02', '14#01-03', '14#01-04'],
    amount: '￥ 0',
    state: '当期已缴纳', // 计算函数
    payDate: '2015-11-24',
    creator: 'Jack',
    createdAt: '2014-12-24 23:12:00',
    platform: ''
}, {
    key: 2,
    name: `客户 ${1 + 1}`,
    area: '135',
    idcard: '123456789012345678',
    // code: '10#01-01',
    code: ['10#01-01', '10#01-02'],
    amount: '￥ 568.08',
    state: '已逾期',
    payDate: '2015-11-24',
    creator: 'Jack',
    createdAt: '2014-12-24 23:12:00',
    platform: ''
});
// }

const innerColumns = [
    { title: '期数', dataIndex: 'index', key: 'index' },
    { title: '期间开始', dataIndex: 'beginDate', key: 'beginDate' },
    { title: '期间结束', dataIndex: 'endDate', key: 'endDate' },
    { title: '金额', dataIndex: 'amount', key: 'amount' },
    { title: '缴纳截止日期', dataIndex: 'payBeginDate', key: 'payBeginDate' },
    { title: '缴纳情况', key: 'state' },
    { title: '支付日期', dataIndex: 'payDate', key: 'payDate' },
    {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
    },
];

interface innerDataItem {
    index: number;
    beginDate: string;
    endDate: string;
    amount: string;
    payBeginDate: string;
    payDate: string;
    state: string;
    // name: string;
}

const innerData: innerDataItem[] = [];
// for (let i = 0; i < 3; ++i) {
innerData.push({
    index: 1,
    beginDate: '2014-12-24',
    endDate: '2015-12-23',
    amount: '￥ 568.08',
    payBeginDate: '2014-11-24',
    state: '当期已缴纳',
    // name: `This is production name ${i + 1}`,
    payDate: '2014-10-11',
}, {
    index: 2,
    beginDate: '2015-12-24',
    endDate: '2016-12-23',
    amount: '￥ 568.08',
    payBeginDate: '2015-11-24',
    state: '当期已缴纳',
    // name: `This is production name ${i + 1}`,
    payDate: '2015-10-12',
}, {
    index: 3,
    beginDate: '2016-12-23',
    endDate: '2017-12-24',
    amount: '￥ 568.08',
    payBeginDate: '2016-11-24',
    state: '未到日期',
    // name: `This is production name ${i + 1}`,
    payDate: '',
});


const innerData2: innerDataItem[] = [];
// for (let i = 0; i < 3; ++i) {
innerData2.push({
    index: 1,
    beginDate: '2014-12-24',
    endDate: '2015-12-23',
    amount: '￥ 568.08',
    payBeginDate: '2014-11-24',
    state: '当期已缴纳',
    // name: `This is production name ${i + 1}`,
    payDate: '2014-10-11',
}, {
    index: 2,
    beginDate: '2015-12-24',
    endDate: '2016-12-23',
    amount: '￥ 568.08',
    payBeginDate: '2015-11-24',
    state: '已逾期',
    // name: `This is production name ${i + 1}`,
    payDate: '',
}, {
    index: 3,
    beginDate: '2016-12-23',
    endDate: '2017-12-24',
    amount: '￥ 568.08',
    payBeginDate: '2016-11-24',
    state: '未到日期',
    // name: `This is production name ${i + 1}`,
    payDate: '',
});
// }
</script>
<style>
.tablestyle {
    background-color: lightgray !important;
}

.tablestyle-div {
    max-height: 80vh;
    /* 使用视口高度的百分比 */
    overflow-y: auto;
    /* 开启垂直滚动条 */
}

.ant-table-tbody>tr:hover>td {
    background-color: transparent !important;
    /* 禁用默认的悬浮背景色 */
}

.ant-table-tbody>tr:active>td {
    background-color: darkgray;
    /* 鼠标离开后变为这个颜色 */
    /* 禁用默认的悬浮背景色 */
}

/* body {
    height: auto;
} */
</style>