<template>
  <ButtonSlotView :buttonStyle="{ color: 'red' }" :info="'请联系管理员,输入密码,才能删除。'" :buttonName="'删除'"
    :Confirm="handleConfirm">
  </ButtonSlotView>
</template>

<script setup lang="ts">
import ButtonSlotView from '@/cp-v1/cp-GCP/Button/ButtonSlot.vue'
import { usePlanStore } from "@/stores/plan";
import message from 'ant-design-vue/es/message';

const planStore = usePlanStore();

const handleConfirm = async (password: string) => {
  if (password === 'delete') {
    await planStore.delete(planStore.data.selectID as string);
    // await planStore.read();
  } else {
    await message.error('密码错误，删除失败');
  }
};
</script>

<style scoped></style>