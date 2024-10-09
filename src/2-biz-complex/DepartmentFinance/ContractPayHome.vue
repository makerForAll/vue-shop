<template>
  <!-- 客户相关 -->
  <div>
    <ReadClientFinanceView>
      <template #operation="{ record }">
        <ReadPaymentHome :client-obj="record"> </ReadPaymentHome>
      </template>
    </ReadClientFinanceView>
  </div>
</template>

<script setup lang="ts">
// 小主板-插槽  【表格 插槽板】
// import ReadClientView from '../cp-projectCP/ClientHome/ReadClient/ReadClientHome.vue';// 优化掉
// import ReadClientServersView from '../cp-projectCP/ClientServersHome/ReadClientServers.vue'

// 主板-插槽 【抽屉 插槽板】
// import DrawerSlotView from '@/cp-v1/cp-MB/Drawer/DrawerSlot.vue';
// import ReadPlanView from '@/cp-v1/cp-ReadMB-data/Drawer/0101.vue';
// import ReadPlanView from '../cp-projectCP/PlanHome/ReadPlan/Home.vue'
import ReadClientFinanceView from '../cp-projectCP/ClientFinanceHome/ReadClientFinance.vue'

// import CreateAndUpdate from '../cp-projectCP/ClientFinanceHome/Common/CreateAndUpdate.vue';
// import ReadPlanAboutPayment from '../cp-projectCP/ClientFinanceHome/ReadPlanAboutPayment.vue'
// import UpdateAboutClientFinanceHome from '../cp-projectCP/PaymentPlansplit/ReadPaymentPlansplit/UpdateAboutClientFinanceHome.vue'
import ReadPaymentHome from '../cp-projectCP/PaymentPlansplit/ReadPaymentPlansplit/ReadPaymentHome.vue'

// cp-projectCP 配置你要的 配件

// import { useClientStore } from '@/stores/client'

// ---------------
// const props = defineProps({
//   partysoftwareId: {
//     type: String,
//     default: ''
//   }
// })

// --------------
// const clientStore = useClientStore()

// const handleTabChange = (key: number) => {
//   console.log('getKey', key)
//   clientStore.getKeyToState(key)
//   //   const tagValue = parseInt(key) - 1;
//   //   currentFilters.value = { tags: tagValue };
//   // 触发新的请求
//   //   fetchData(currentFilters.value);
// }
</script>
<style scoped></style>
