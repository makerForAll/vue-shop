<template>
    <ButtonSlotView :buttonStyle="{ color: 'green' }" :info="'编辑?请输入编辑密码'" :buttonName="'编辑'" :Confirm="handleConfirm">
    </ButtonSlotView>
</template>

<script setup lang="ts">
import ButtonSlotView from '@/cp-v1/cp-GCP/Button/ButtonSlot.vue'
import message from 'ant-design-vue/es/message';


const props = defineProps<{
    edit: (id: string, index: number) => void;
    recordId: string | undefined;
    outerIndex: number;
}>();

const handleConfirm = async (password: string) => {
    if (password === 'edit') {
        // 组件外面的 方法 edit(record.id, outerIndex) 在此次 被调用。
        props.edit(props.recordId as string, props.outerIndex);
    } else {
        await message.error('密码错误，创建分摊失败');
    }
};

</script>

<style scoped></style>