<template>
    <div>
        <a-botton @click="deleteBt">删除Item</a-botton>
    </div>
</template>

<script setup lang="ts">
// 删除 pinia层中的store 数据，不用实际 请求，请求由其他按钮来完成。
const deleteBt = () => {
    // 删除pinia层中的store 数据
}
</script>

<style scoped></style>