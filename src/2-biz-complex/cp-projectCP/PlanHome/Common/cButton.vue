<template>
    <ButtonSlotView :buttonStyle="{ color: 'orange' }" :info="'是否转入正式合同?(只会保留该方案履行合同，其他方案将会删除)'" :buttonName="'转正式合同?'"
        :Confirm="handleConfirm">
    </ButtonSlotView>
</template>

<script setup lang="ts">
import ButtonSlotView from '@/cp-v1/cp-GCP/Button/ButtonSlot.vue'
import type { CPaymentDetailItemVO } from '@/2-biz-complex/services/vo/paymentdetailitem';
import type { RPlanVO } from '@/2-biz-complex/services/vo/plan';
import { usePlanStore } from "@/stores/plan";
import message from 'ant-design-vue/es/message';
import { cloneDeep } from 'lodash';
import { shareAreaFun } from '../tool/shareArea/shareAreaCal';
import dayjs from 'dayjs';
import { useClientStore } from '@/stores';
import type { RClientVO } from '@/2-biz-complex/services/vo/client';
import { usePartySoftwareStore } from '@/stores/partysoftware';
import { useHeaderStore } from '@/stores/header';

const props = defineProps<{
    planObj: RPlanVO;
}>();

const planStore = usePlanStore();
const clientStore = useClientStore();
const partySoftwareStore = usePartySoftwareStore();
const headerStore = useHeaderStore();
const handleConfirm = async (password: string) => {
    if (password === '8888') {
        // await planStore.delete(planStore.data.selectID as string);
        // await planStore.read();
        handleShareArea(props.planObj);  // 使用从外部传入的 planObj
    } else {
        await message.error('密码错误，转入正式合同失败');
    }
};


const handleShareArea = async (obj: RPlanVO) => { // 创建分摊
    console.log("obj:", obj);

    // const getObj = cloneDeep(clientStore.data.RItem);
    // getObj.tags = 8;

    await clientStore.readById(obj.client?.id as string).then(async (item) => {
        item.tags = 8;
        console.log("getObj:", item);
        clientStore.update(item.id as string, item);
        //-- 合并 3个单元的信息，并添加到 unitys中。
        // const all_store = obj.rel_store?.concat(obj.rel_store2 ,obj.rel_store3)
        const mergedArray = (obj.rel_store || []).concat(obj.rel_store2 || [], obj.rel_store3 || []);

        await partySoftwareStore.readByIdForRel(headerStore.partysoftwareId).then((data: any) => {
            const matchedObjects = data.unitys.filter((unity: any) => mergedArray.includes(unity.id));
            console.log("matchedObjects-", matchedObjects);
            planStore.update(planStore.data.selectID, { unitys: matchedObjects })
        })


    })

    // obj?.client?.tags : number = 4
    // 先把当前的planObj 进行拷贝。
    // cloneDeep();
    // const getObj = cloneDeep(obj);
    // // 函数需要的值
    // const paymentItems = obj.payment_detail_items as unknown as CPaymentDetailItemVO[];
    // const amountArr = paymentItems.map(item => item.amount);
    // const increase_rate = obj.increase_rate as number;
    // const totalAmount = obj.total_amount as number;
    // const total_area = obj.total_area as number;
    // // 计算出 需要变更的值
    // const { average_price,
    //     initial_monthly_price,
    //     payment_detail_itemsAmount } = shareAreaFun(amountArr, increase_rate, totalAmount, total_area);

    // // 开始处理对象
    // delete getObj.id;
    // getObj.average_price = average_price;
    // getObj.first_price = average_price;
    // getObj.second_price = average_price;
    // getObj.third_price = average_price;
    // // delete getObj.second_price;
    // // delete getObj.third_price;
    // getObj.initial_monthly_price = initial_monthly_price;
    // // getObj.first_area = total_area;
    // // getObj.first_name = ''; // 清空位置1名称
    // // getObj.second_name = '';// 清空位置2名称
    // // getObj.third_name = '';// 清空位置3名称
    // // delete getObj.second_area;
    // // delete getObj.third_area;

    // getObj.name = dayjs().tz('Asia/Shanghai').format('YYYY/MM/DD HH:mm:ss') + '分摊后'
    // getObj.payment_detail_items.forEach((item, index) => {
    //     if (index < payment_detail_itemsAmount.length) {
    //         delete item?.id;
    //         item.amount = payment_detail_itemsAmount[index];
    //         item.remarks = '';
    //     }
    // });
    // getObj.total_amount = payment_detail_itemsAmount.reduce((sum, item) => sum + item, 0);
    // // 将分摊好的值 进行创建plan
    // console.log("getObj-----,", getObj);

    // planStore.createPlanByClientId(clientStore.data.selectID, getObj);
}
</script>

<style scoped></style>