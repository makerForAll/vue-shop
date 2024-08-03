// import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'

// ## ----------------------------- Antd
import 'ant-design-vue/dist/reset.css'
import Antd from 'ant-design-vue'

// ## ----------------------------- Pinia
// import { createPinia } from 'pinia'
import pinia from '@/stores/index'

// ## ----------------------------- router
import router from './router'

// # ---- vue-print-next 打印预览 ---
import { printPlugin } from 'vue-print-next'

const app = createApp(App)

// ------------- begin
app.use(pinia) // 状态管理
app.use(Antd) // antd组件库
app.use(router) // 路由管理
app.use(printPlugin)

app.mount('#app')
