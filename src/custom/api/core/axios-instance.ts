// src/api/request.ts
// import { convertDatesToDayjs } from '@/custom/tools/convertDates'
import axios, { type AxiosInstance, type AxiosResponse } from 'axios'
import axiosRetry from 'axios-retry'
// import { message as wolail } from 'ant-design-vue';
// frontend
const axiosInstance: AxiosInstance = axios.create({
  // baseURL: 'https://ecs.yljt.info',
  // baseURL: 'http://api.yljt.info',
  baseURL: 'http://localhost:9000/',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json'
  }
})
// 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
// 重试连接
axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 1000 // 每次重试延迟 1 秒
  },
  retryCondition: (error: any) => {
    return error.response.status >= 500 // 仅对 5xx 错误重试
  }
})

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 发送请求之前做些什么
    // config.params = { ...config.params, icode: 'E4993F09B37DE0E4' };
    // config.withCredentials = true // 确保每个请求都携带凭证
    // 可以在这里添加其他全局的请求配置，比如 headers
    // config.headers['Content-Type'] = 'application/json'
    // config.headers['Referrer-Policy'] = 'no-referrer-when-downgrade'
    console.log('http://localhost:3306发送请求之前做些什么', config)
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    //   console.log(" 对响应数据做点什么-------------:-",response);
    //   console.log(" 对响应数据做点什么TEST--------------:",response);
    if (response.data) {
      //   response.data = convertDatesToDayjs(response.data)
    }
    console.log(' 对响应数据--------------:', response.data.results.data)
    // --------------------- 数据转换 ---------------------------------

    return response
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    // 检查是否有响应数据并保留原始的响应错误信息
    // console.log('拦截器：', error)

    if (error.response && error.response.data) {
      return Promise.reject(error.response.data) // 直接返回完整的响应数据
    } else {
      // 如果没有响应数据，抛出一个通用错误
      const newError = new Error('Unknown error')
      return Promise.reject(newError)
    }
  }
)

export default axiosInstance
