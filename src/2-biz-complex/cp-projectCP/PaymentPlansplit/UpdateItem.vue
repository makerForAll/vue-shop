<template>
    <div>
        <a-botton @click="updateBt">编辑Item</a-botton>
    </div>
</template>

<script setup lang="ts">
// 修改 pinia层中的store 数据，不用实际 请求，请求由其他按钮来完成。
const updateBt = () => {
    // 修改pinia层中的store 数据

}
</script>

<style scoped></style>