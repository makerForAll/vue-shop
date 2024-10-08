<template>
    <a-button type="primary" :loading="iconLoading" @click="enterIconLoading">
        <template #icon>
            <PoweroffOutlined />
        </template>
        延迟1s
    </a-button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { PoweroffOutlined } from '@ant-design/icons-vue';
const props = defineProps<{
    loading: boolean;
}>();
const emits = defineEmits(['enterIconLoading']);
interface DelayLoading {
    delay: number;
}


watch(props, (newValue) => {
    iconLoading.value = newValue.loading;
    // planForm.total_area = newValue.toString();
});
const iconLoading = ref<boolean | DelayLoading>(props.loading);
const enterIconLoading = () => {
    iconLoading.value = { delay: 1000 };

    setTimeout(() => {
        iconLoading.value = false;
    }, 6000);
};
emits('enterIconLoading');
</script>

<style scoped></style>