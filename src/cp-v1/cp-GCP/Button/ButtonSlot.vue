<template>
  <a-popconfirm @confirm="handleConfirm" @cancel="handleCancel">
    <template #icon><question-circle-outlined style="color: red" />
      {{ props.info }}
      <a-input v-model:value="password" placeholder="Password" />
    </template>
    <a-button :style="props.buttonStyle" type="link">{{ props.buttonName }}</a-button>
  </a-popconfirm>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import { QuestionCircleOutlined } from '@ant-design/icons-vue';
// 删除功能


const props = defineProps<{
  Confirm: (password: string) => void;
  buttonName: string,
  buttonStyle?: object,
  info: string,
}>()

const visible = ref(false);
const password = ref('');


const handleConfirm = () => {
  props.Confirm(password.value);
  visible.value = false;
  password.value = '';
};

const handleCancel = () => {
  visible.value = false;
  password.value = '';
};

</script>

<style scoped>
/* Add any custom styles here */
</style>