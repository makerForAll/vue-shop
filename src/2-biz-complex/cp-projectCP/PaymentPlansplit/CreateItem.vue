<template>
    <div>
        <a-botton @click="clickBt">添加Item</a-botton>
    </div>
</template>

<script setup lang="ts">
// 修改 pinia层中的store 数据，不用实际 请求，请求由其他按钮来完成。
const clickBt = () => {
    console.log('clickBt')
}
</script>

<style scoped></style>