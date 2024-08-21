<template>
  <a-config-provider :locale="zhCN">
    <a-layout style="min-height: 100vh">

      <RouterView name="SiderBar" />
      <!-- 侧边栏 -->
      <a-layout>

        <RouterView /> <!-- 默认 Header-->
        <!-- 缩放控制按钮 -->
        <div style="padding: 10px; text-align: center;">
          缩放比率
          {{ headerStore.scale.toFixed(2) }}
          <a-button @click="headerStore.zoomIn">放大</a-button>
          <a-button @click="headerStore.zoomOut">缩小</a-button>
          <a-button @click="headerStore.resetZoom">重置</a-button>
        </div>
        <a-layout style="padding: 0 24px 24px">
          <div :style="{
            transform: `scale(${headerStore.getScale})`,
            transformOrigin: 'top left',
            width: `${100 / headerStore.getScale}%`,
            height: `${100 / headerStore.getScale}%`,
            background: '#fff',
            margin: '0 auto',
          }">
            <!-- <a-layout style="padding: 0 24px 24px"> -->
            <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
              <RouterView name="MainContainer" />
            </a-layout-content>
          </div>
        </a-layout>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script setup lang="ts">

// 组件中文化
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { ref } from 'vue';
import { useHeaderStore } from './stores/header';

const headerStore = useHeaderStore();

// const scale = ref(1);

// function zoomIn() {
//   scale.value += 0.1;
// }

// function zoomOut() {
//   if (scale.value > 0.1) scale.value -= 0.1;
// }

// function resetZoom() {
//   scale.value = 1;
// }
</script>
<style>
/* .layout {
  background: lightblue;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
} */

/*-------*/
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>