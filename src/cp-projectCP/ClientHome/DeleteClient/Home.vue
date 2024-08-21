<template>
  <span v-if="clientStore.data.tabsKey == 0">
    <ButtonSlotView :buttonStyle="{ color: 'red' }" :info="'请联系管理员,输入密码,才能删除。'" :Confirm="handleConfirm"
      :buttonName="'删除'">
    </ButtonSlotView>
  </span>

</template>

<script setup lang="ts">
import ButtonSlotView from '@/cp-v1/cp-GCP/Button/ButtonSlot.vue'
import { useClientStore } from "@/stores/client";
import message from 'ant-design-vue/es/message';

const clientStore = useClientStore();

const handleConfirm = async (password: string) => {
  if (password === '8888') {
    console.log("myId:", clientStore.data.selectID);

    await clientStore.delete(clientStore.data.selectID as string);
    // await clientStore.read();
  } else {
    await message.error('密码错误，删除失败');
  }
};
</script>

<style scoped></style>