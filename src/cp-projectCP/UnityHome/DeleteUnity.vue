<template>
    <span>
        <ButtonSlotView :info="'请联系管理员,输入密码,才能删除。'" :buttonName="'删除'" :Confirm="handleConfirm">
        </ButtonSlotView>
    </span>

</template>

<script setup lang="ts">
import ButtonSlotView from '@/cp-v1/cp-GCP/Button/ButtonSlot.vue'
import { useUnityStore } from '@/stores/';
import message from 'ant-design-vue/es/message';

const store = useUnityStore();

const handleConfirm = async (password: string) => {
    if (password === '8888') {
        console.log("myId:", store.data.selectID);

        await store.delete(store.data.selectID as string);
        // await clientStore.read();
    } else {
        await message.error('密码错误，删除失败');
    }
};
</script>

<style scoped></style>