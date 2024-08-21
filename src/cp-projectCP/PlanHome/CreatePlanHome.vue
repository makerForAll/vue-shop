<template>
  <CreateAndUpdateView :action="'创建'" :entity-type="'方案'" @show-drawer="showDrawer" @handle-submit="handleSubmit"
    @field-change="fieldChange" @close-drawer="closeDrawer">

  </CreateAndUpdateView>
</template>

<script setup lang="ts">
import CreateAndUpdateView from '@/cp-projectCP/PlanHome/Common/CreateAndUpdate.vue';
import type { CPlanVO } from '@/services/vo/plan';
import { useClientStore, usePlanStore } from '@/stores';

const planStore = usePlanStore();

const clientState = useClientStore();

const closeDrawer = async () => {
  console.log("createPlanHome");

  delete planStore.data.CUItem.id;
}

const showDrawer = async () => { // 打开表单
  // 重置form
  await planStore.initState()
}

const handleSubmit = async (form: any) => { // 提交表单
  console.log("test", form);

  await planStore.createPlanByClientId(clientState.data.selectID as string, form);
}

const fieldChange = async (form: CPlanVO) => {
  // --------------------------------------------------
  planStore.runCal(); // 计算 总面积 和 平均单价
  planStore.data.CUItem = form
}
</script>

<style scoped></style>