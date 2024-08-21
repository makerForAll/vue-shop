// import './assets/main.css'

import 'reflect-metadata'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'

// ## ----------------------------- Antd
import 'ant-design-vue/dist/reset.css'
import Antd from 'ant-design-vue'

// ## ----------------------------- Pinia
// import { createPinia } from 'pinia'
import pinia from '@/stores'

// ## ----------------------------- router
import router from './router'

// # ---- vue-print-next 打印预览 ---
import { printPlugin } from 'vue-print-next'

// # ----------- 北京时间配置 ------
// 扩展 dayjs 以支持 UTC 和时区功能
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

// 设置默认时区为北京时区
dayjs.tz.setDefault('Asia/Shanghai')

const app = createApp(App)

// ------------- begin
app.use(pinia) // 状态管理
app.use(Antd) // antd组件库
app.use(router) // 路由管理
app.use(printPlugin)

app.mount('#app')
