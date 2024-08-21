<template>
    <DrawerSlotView :action="props.action" :entityType="props.entityType" v-model="planStore.data.CUItem"
        :fields="planFields" :rules="rules" @handleSubmit="handleSubmit" @fieldChange="fieldChange"
        @showDrawer="showDrawer" @close-drawer="closeDrawer">
        <template #head-form>
            <a-dropdown>
                <template #overlay>
                    <a-menu @click="handleMenuClick">
                        <a-menu-item key="1" @click="generatePaymentDetails"> 生成 - 支付明细【精度：个位】</a-menu-item>
                        <a-menu-item key="3" @click="generatePaymentDetails2">生成 - 支付明细【精度：小数点后2位】</a-menu-item>
                        <a-menu-item key="2" @click="generateTotalAmount">根据明细 - 计算总金额</a-menu-item>
                    </a-menu>
                </template>
                <a-button>
                    支付明细-相关操作
                    <DownOutlined />
                </a-button>
            </a-dropdown>
        </template>
    </DrawerSlotView>
</template>

<script setup lang="ts">

// import type { Plan } from '@/api/services/plan';
import DrawerSlotView from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue'
import { useClientStore } from '@/stores/client';
import { usePlanStore } from '@/stores/plan'
import type { Rule } from 'ant-design-vue/es/form'
import { onMounted } from 'vue';
import type { Field } from '@/cp-v1/cp-GCP/Drawer/DrawerSlot4.vue';
import type { CPlanVO } from '@/services/vo/plan';
import { paymentMainFun } from '../tool';
import type { CPaymentDetailItemVO } from '@/services/vo/paymentdetailitem';

import { DownOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
const handleMenuClick: MenuProps['onClick'] = e => {
    console.log('click', e);
};

const props = defineProps<{
    action: string,
    entityType: string,
}>();

const planFields: Field[] = [
    {
        name: 'is_default',
        label: '是否默认',
        component: 'a-switch',
        props: { disabled: true },
        span: 8
    },
    { name: '基本信息', component: 'hr', props: { placeholder: 'Enter remarks' } },
    {
        name: 'name',
        label: '方案名称',
        component: 'a-input',
        props: { placeholder: 'Enter name' },
        span: 8
    },
    {
        name: 'contract_type',
        label: '合同类型',
        component: 'a-select',
        props: {
            placeholder: 'Select contract type',
            options_str: [
                { value: '1', label: '租赁合同' },
                { value: '2', label: '销售合同' },
                { value: '9', label: '其他' }
            ]
        },
        span: 8
    },
    {
        name: 'contract_status',
        label: '合同状态',
        component: 'a-select',
        props: {
            options_str: [
                { value: '1', label: '起草' },
                { value: '2', label: '正常履行' },
                { value: '9', label: '其他' }
            ]
        },
        span: 8
    },
    {
        name: 'first_name',
        label: '位置1',
        component: 'a-input',
        props: { placeholder: 'Enter first name' },
        span: 8
    },
    {
        name: 'first_area',
        label: '面积1',
        component: 'a-input-number',
        props: { placeholder: 'Enter first area', addonAfter: "㎡" },
        span: 8
    },
    {
        name: 'first_price',
        label: '价格1',
        component: 'a-input-number',
        props: { placeholder: 'Enter first price', addonAfter: "¥" },
        span: 8
    },
    {
        name: 'second_name',
        label: '位置2',
        component: 'a-input',
        props: { placeholder: 'Enter second name' },
        span: 8
    },
    {
        name: 'second_area',
        label: '面积2',
        component: 'a-input-number',
        props: { placeholder: 'Enter second area', addonAfter: "㎡" },
        span: 8
    },
    {
        name: 'second_price',
        label: '价格2',
        component: 'a-input-number',
        props: { placeholder: 'Enter second price', addonAfter: "¥" },
        span: 8
    },
    {
        name: 'third_name',
        label: '位置3',
        component: 'a-input',
        props: { placeholder: 'Enter third name' },
        span: 8
    },
    {
        name: 'third_area',
        label: '面积3',
        component: 'a-input-number',
        props: { placeholder: 'Enter third area', addonAfter: "㎡" },
        span: 8
    },
    {
        name: 'third_price',
        label: '价格3',
        component: 'a-input-number',
        props: { placeholder: 'Enter third price', addonAfter: "¥" },
        span: 8
    },


    {
        name: 'total_area',
        label: '合计面积',
        component: 'a-input-number',
        props: { placeholder: 'Enter total area', disabled: true, addonAfter: "㎡" },
        span: 8
    },
    {
        name: 'average_price',
        label: '平均价格',
        component: 'a-input-number',
        props: { placeholder: 'Enter average price', disabled: true, addonAfter: "¥" },
        span: 8
    },
    {
        name: 'startdate_and_enddate',
        label: '合同生效日期',
        component: 'a-range-picker',
        props: { placeholder: 'Select start date' },
        span: 16
    },
    {
        name: 'contract_duration_days',
        label: '合同天数',
        component: 'a-input-number',
        props: { placeholder: 'Enter total area', disabled: true, addonAfter: "天" },
        span: 8
    },

    {
        name: 'initial_monthly_price',
        label: '初期每月费用',
        component: 'a-input-number',
        props: { placeholder: 'Enter initial monthly price', disabled: true, addonAfter: "¥" },
        span: 8
    },

    {
        name: 'increase_interval_months',
        label: '增长率条件（每多少个月）',
        component: 'a-select-number',
        props: {
            options_num: [
                { value: 12, label: '每12个月' },
                { value: 24, label: '每24个月' },
                { value: 36, label: '每36个月' }
            ]
        },
        span: 8
    },
    { name: 'increase_rate', label: '增长率（百分比）', component: 'a-input-number', props: { placeholder: '6', addonAfter: "%" }, span: 8 },
    { name: 'deposit', label: '押金', component: 'a-input-number', props: { placeholder: '500', addonAfter: "¥" }, span: 8 },
    {
        name: 'payment_interval_months',
        label: '付款周期(每多少个月支付)',
        component: 'a-select-number',
        props: {
            options_num: [
                { value: 3, label: '每3个月' },
                { value: 6, label: '每6个月' },
                { value: 12, label: '每12个月' }
            ]
        },
        span: 8
    },
    { name: 'rent_free_months', label: 'JM', component: 'a-input-number', props: { placeholder: 'Enter rent free (months)', addonAfter: "月" }, span: 8 },
    { name: 'remarks', label: '备注信息', component: 'a-input', props: { placeholder: 'Enter remarks' } },
    { name: '支付明细', component: 'hr', props: { placeholder: 'Enter remarks' } },
    {
        name: 'payment_detail_items',
        label: '支付明细',
        labelNone: true,
        component: 'a-input-group',
        columns: ['序号', '期间开始', '期间结束', '金额(含税)', '缴纳截止日期', '备注'],
        group: ['period_start', 'period_end', 'amount', 'due_date', 'remarks'],
        props: {
            placeholder: 'Enter first price',
            addonAfter: '¥',
        },
        span: 24
    },
    { name: 'total_amount', label: '总金额', component: 'a-input-number', props: { disabled: true, placeholder: '0', addonAfter: "¥" }, span: 8 },
]

const rules: Record<string, Rule[]> = {
    name: [{ required: true, message: 'Please enter name' }],
    first_name: [{ required: true, message: 'Please enter first name' }],
    dynamic_field: [{ required: true, message: 'Please add at least one dynamic field' }],
    first_area: [{ required: true, message: 'Please enter first area' }],
    first_price: [{ required: true, message: 'Please enter first price' }],
    second_name: [{ required: false, message: 'Please enter second name' }],
    second_area: [{ required: false, message: 'Please enter second area' }],
    second_price: [{ required: false, message: 'Please enter second price' }],
    third_name: [{ required: false, message: 'Please enter third name' }],
    third_area: [{ required: false, message: 'Please enter third area' }],
    third_price: [{ required: false, message: 'Please enter third price' }],
    total_area: [{ required: true, message: 'Please enter total area' }],
    average_price: [{ required: true, message: 'Please enter average price' }],
    initial_monthly_price: [{ required: true, message: 'Please enter initial monthly price' }],
    contract_type: [{ required: true, message: 'Please select contract type' }],
    contract_status: [{ required: true, message: 'Please select contract status' }],
    is_default: [{ required: true, message: 'Please enter record type' }],
    // record_type: [{ required: true, message: 'Please enter record type' }],
    // contract_duration_months: [{ required: true, message: 'Please enter contract duration (months)' }],
    startdate_and_enddate: [{ required: false, message: 'Please select start date' }],
    // payment_interval_months: [{ required: true, message: 'Please enter payment interval (months)' }],
    // increase_interval_months: [{ required: true, message: 'Please enter increase interval (months)' }],
    // increase_rate: [{ required: true, message: 'Please enter increase rate (%)' }],
    // deposit: [{ required: true, message: 'Please enter deposit (元)' }],
    // rent_free_months: [{ required: true, message: 'Please enter rent free (months)' }],
    // initial_payment_duedays: [{ required: true, message: 'Please enter initial payment due days' }],
    // recurring_payment_duedays: [{ required: true, message: 'Please enter recurring payment due days' }],
    // total_amount: [{ required: true, message: 'Please enter total amount' }],
    // remarks: [{ required: false, message: 'Please enter remarks' }]
}

// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------




const planStore = usePlanStore()
onMounted(() => {
    planStore.initState();// 初始化
})


// ----------- 传递到第三层 自定义化 -------------------------------------------------------------------
const emits = defineEmits(['showDrawer', 'closeDrawer', 'handleSubmit', 'fieldChange']);
const closeDrawer = async () => {
    emits('closeDrawer')
}
const showDrawer = async () => { // 打开表单
    // 重置form
    emits('showDrawer')
    // await planStore.initState()
}

const handleSubmit = async (form: any) => { // 提交表单
    emits('handleSubmit', form)
    // await planStore.createPlanByClientId(clientState.data.selectID as string, form);
}
const fieldChange = async (form: CPlanVO) => {
    emits('fieldChange', form)
    // console.log("form---------------:", form);
    // --------------------------------------------------
    // planStore.runCal('create'); // 计算 总面积 和 平均单价
    // planStore.data.CItem = form
}
// ----------- 传递到第三层 自定义化 -------------------------------------------------------------------

// ----------- 第二层 通用 功能 ---------------

const generateTotalAmount = async () => { //计算 总金额
    if (planStore.data.CUItem.payment_detail_items) {
        planStore.calculateTotalAmount(planStore.data.CUItem.payment_detail_items);
    }
}

const generatePaymentDetails = async () => { // 生成支付明细
    // 放入plan的基础数据，获得支付明细的数据
    const { paymentDetails, paymentAmountArr }: { paymentDetails: CPaymentDetailItemVO[], paymentAmountArr: number[] } = await paymentMainFun(planStore.data.CUItem, '0');
    planStore.data.paymentAmountArr = paymentAmountArr;
    // 将 生成支付明细数据给 pinia层
    planStore.data.CUItem.payment_detail_items = paymentDetails;

    // 使用计算合同总金额，在getter中赋值
    planStore.calculateTotalAmount(planStore.data.CUItem.payment_detail_items)
}

const generatePaymentDetails2 = async () => { // 生成支付明细[精度到小数点后2位]
    // 放入plan的基础数据，获得支付明细的数据
    const { paymentDetails, paymentAmountArr }: { paymentDetails: CPaymentDetailItemVO[], paymentAmountArr: number[] } = await paymentMainFun(planStore.data.CUItem, '0.00');
    planStore.data.paymentAmountArr = paymentAmountArr;
    // 将 生成支付明细数据给 pinia层
    planStore.data.CUItem.payment_detail_items = paymentDetails;

    // 使用计算合同总金额，在getter中赋值
    planStore.calculateTotalAmount(planStore.data.CUItem.payment_detail_items)
}


// -------------------------------------  pinia层 数据交互 -------------------------------------------------------------------
</script>

<style scoped></style>