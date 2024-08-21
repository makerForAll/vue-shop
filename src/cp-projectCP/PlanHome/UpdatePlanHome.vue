<template>
  <CreateAndUpdateView :action="'更新'" :entity-type="'方案'" @show-drawer="showDrawer" @handle-submit="handleSubmit"
    @field-change="fieldChange" @close-drawer="closeDrawer">

  </CreateAndUpdateView>
</template>

<script setup lang="ts">
import CreateAndUpdateView from '@/cp-projectCP/PlanHome/Common/CreateAndUpdate.vue';
import type { CPlanVO, UPlanVO } from '@/services/vo/plan';
import { useClientStore, usePlanStore } from '@/stores';

const planStore = usePlanStore();

const clientState = useClientStore();

const closeDrawer = async () => {

  delete planStore.data.CUItem.id;
}

const showDrawer = async () => { // 打开表单
  // 重置form
  await planStore.initkong()
  // await planStore.initState()
  planStore.data.CUItem = await planStore.data.RItems.find(item => item.id === planStore.data.selectID) as UPlanVO;
}

const handleSubmit = async (form: any) => { // 提交表单
  // console.log("test", form);
  await planStore.update(planStore.data.selectID, form);
}

const fieldChange = async (form: CPlanVO) => {
  // --------------------------------------------------
  planStore.runCal(); // 计算 总面积 和 平均单价
  // 计算 总金额
  planStore.data.CUItem = form
}
</script>

<style scoped></style>