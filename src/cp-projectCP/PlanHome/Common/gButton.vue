<template>
    <ButtonSlotView :buttonStyle="{ color: 'green' }" :info="'创建分摊?请输入分摊密码'" :buttonName="'创建分摊'"
        :Confirm="handleConfirm">
    </ButtonSlotView>
</template>

<script setup lang="ts">
import ButtonSlotView from '@/cp-v1/cp-GCP/Button/ButtonSlot.vue'
import type { CPaymentDetailItemVO } from '@/services/vo/paymentdetailitem';
import type { RPlanVO } from '@/services/vo/plan';
import { usePlanStore } from "@/stores/plan";
import message from 'ant-design-vue/es/message';
import { cloneDeep } from 'lodash';
import { shareAreaFun } from '../tool/shareArea/shareAreaCal';
import dayjs from 'dayjs';
import { useClientStore } from '@/stores';

const props = defineProps<{
    planObj: RPlanVO;
}>();

const planStore = usePlanStore();
const clientStore = useClientStore();

const handleConfirm = async (password: string) => {
    if (password === '6666') {
        // await planStore.delete(planStore.data.selectID as string);
        // await planStore.read();
        handleShareArea(props.planObj);  // 使用从外部传入的 planObj
    } else {
        await message.error('密码错误，创建分摊失败');
    }
};


const handleShareArea = (obj: RPlanVO) => { // 创建分摊
    console.log("obj:", obj);
    // 先把当前的planObj 进行拷贝。
    // cloneDeep();
    const getObj = cloneDeep(obj);
    // 函数需要的值
    const paymentItems = obj.payment_detail_items as unknown as CPaymentDetailItemVO[];
    const amountArr = paymentItems.map(item => item.amount);
    const increase_rate = obj.increase_rate as number;
    const totalAmount = obj.total_amount as number;
    const total_area = obj.total_area as number;
    // 计算出 需要变更的值
    const { average_price,
        initial_monthly_price,
        payment_detail_itemsAmount } = shareAreaFun(amountArr, increase_rate, totalAmount, total_area);

    // 开始处理对象
    delete getObj.id;
    getObj.average_price = average_price;
    getObj.first_price = average_price;
    getObj.initial_monthly_price = initial_monthly_price;
    getObj.first_area = total_area;
    getObj.first_name = ''; // 清空位置1名称
    getObj.second_name = '';// 清空位置2名称
    getObj.third_name = '';// 清空位置3名称
    delete getObj.second_area;
    delete getObj.third_area;
    delete getObj.second_price;
    delete getObj.third_price;
    getObj.name = dayjs().tz('Asia/Shanghai').format('YYYY/MM/DD HH:mm:ss')
    getObj.payment_detail_items.forEach((item, index) => {
        if (index < payment_detail_itemsAmount.length) {
            delete item?.id;
            item.amount = payment_detail_itemsAmount[index];
            item.remarks = '';
        }
    });
    getObj.total_amount = payment_detail_itemsAmount.reduce((sum, item) => sum + item, 0);
    // 将分摊好的值 进行创建plan
    planStore.createPlanByClientId(clientStore.data.selectID, getObj);
}
</script>

<style scoped></style>