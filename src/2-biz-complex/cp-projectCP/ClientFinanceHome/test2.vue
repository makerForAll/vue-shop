<template>
    <div>
        <h2>使用组合式 API 和 render 函数动态渲染</h2>
        <!-- 渲染的内容将插入此处 -->
        <div id="rendered-content"></div>
    </div>
</template>

<script lang="ts" setup>
import { h, onMounted, render } from 'vue';

const renderContent = () => {
    // 使用 h 函数创建虚拟 DOM
    const vnode = h(
        'div',
        { class: 'dynamic-content', style: { color: 'blue', border: '1px solid gray', padding: '10px' } },
        [
            h('h3', null, '动态标题'),
            h('p', null, '这是使用组合式API和 h 函数创建的内容')
        ]
    );

    // 使用 Vue 的 render 函数将 vnode 渲染到真实 DOM
    const container = document.getElementById('rendered-content');
    if (container) {
        render(vnode, container); // 使用 render 函数渲染到目标元素
    }
};

// 使用 onMounted 确保在组件挂载后执行渲染
onMounted(() => {
    renderContent();
});
</script>

<style scoped>
.dynamic-content {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin-top: 10px;
}
</style>