import { createPinia } from 'pinia'
const pinia = createPinia()

// 导出所有模块
export * from './client'
export * from './counter'
export * from './party'
export * from './plan'
export * from './unity'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import { createPersistedState } from 'pinia-plugin-persistedstate'
// pinia.use( createPersistedState({
//     storage: sessionStorage,
//   }))

export default pinia
