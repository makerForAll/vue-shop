<template>
  <a-layout-header theme="light" id="header" class="header">
    <div class="party">
      <span>{{ getName }} / {{ store.data.UItem.name }}</span>
    </div>
    <!-- <a-flex justify="flex-end" align="flex-end"> -->
    <a-space style="margin-left: auto">
      <!-- <a-button style="background: orange;" type="dashed" ghost @click="zoomOut">缩小</a-button>
            <a-button style="background: orange;" type="dashed" ghost @click="zoomIn">放大</a-button> -->
    </a-space>
    <!-- </a-flex> -->
    <!-- 
        <a-menu mode="horizontal" style="float:right">
            <a-sub-menu key="sub1">
                <template #title>用户设置</template>
<a-menu-item key="setting:1">
</a-menu-item>
<a-menu-item key="setting:2">
</a-menu-item>
<a-menu-item key="setting:3">个人信息</a-menu-item>
<a-menu-item key="setting:4" @click="onLogout"> 退出登录</a-menu-item>
</a-sub-menu>
</a-menu> -->
  </a-layout-header>
  <!-- <a-layout-header style="background: gray; padding: 0" /> -->
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import router from '@/router'
// import useHeaderStore from '@/stores/header'
// import useUserStore from '@/stores/user';
import { message } from 'ant-design-vue'
import { usePartySoftwareStore } from '@/stores/partysoftware'
import { useHeaderStore } from '@/stores/header'
// const headerStore = useHeaderStore();
// const userStore = useUserStore();
// const { companyCode, lastSegment } = toRefs(headerStore);
// const headerStore = useHeaderStore();

const getUrl = ref(window.location.href)
const segments = ref(getUrl.value.split('/'))

const onLogout = () => {
  // userStore.logout();
  message.success('退出登录成功')
  router.push('/login')
}

// -----------------
const props = defineProps({
  partysoftwareId: {
    type: String,
    default: ''
  }
})
const getName = ref()
const store = usePartySoftwareStore()
const headerStore = useHeaderStore()
onMounted(() => {
  store.readByIdForRel(props.partysoftwareId).then((data) => {
    // console.log("data", data);

    getName.value = data.partyId?.name
  })
  headerStore.partysoftwareId = props.partysoftwareId
})
// --------------------------------- 缩小放大
</script>
<style>
/*------------------------*/

.party {
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(to right, #ffc1cc, #b3e5fc, #c8e6c9, #d1c4e9);
  /* 从粉红到淡蓝，再到淡绿，最后到淡紫的渐变 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

header#header {
  background: linear-gradient(to right, #1b1f23 10%, #c2593e 30%, #feb47b 100%);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  /* 内阴影 */
  color: white;
  height: 60px;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  font-size: 24px;
}

/******/
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* 避免出现滚动条 */
}

#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
</style>
