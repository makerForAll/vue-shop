// src/api/request.ts
import { convertDatesToDayjs } from '@/custom/tools/convertDates';
import axios, { type AxiosInstance, type AxiosResponse } from 'axios';
import axiosRetry from 'axios-retry';
// import { message as wolail } from 'ant-design-vue';

const axiosInstance:AxiosInstance = axios.create({
    baseURL: '/frontend',
    timeout: 20000,
});

axiosRetry(axiosInstance, { retries: 3 });

// 添加请求拦截器
axiosInstance.interceptors.request.use(
	(config) => {
	  // 发送请求之前做些什么
	  // config.params = { ...config.params, icode: 'E4993F09B37DE0E4' };
   		 console.log("发送请求之前做些什么");
	  	return config;
	},
	(error) => {
	  // 对请求错误做些什么
	  	return Promise.reject(error);
	}
  );
  
  // 添加响应拦截器
  axiosInstance.interceptors.response.use(
	(response:AxiosResponse):AxiosResponse => {
		// 2xx 范围内的状态码都会触发该函数。
		// 对响应数据做点什么
		//   console.log(" 对响应数据做点什么-------------:-",response);
		//   console.log(" 对响应数据做点什么TEST--------------:",response);
		if (response.data) {
			response.data = convertDatesToDayjs(response.data);
		}
		console.log(" 对响应数据--------------:",response.data.results.data);
		// --------------------- 数据转换 ---------------------------------
		
		return response;
	},
	(error) => {
		// 超出 2xx 范围的状态码都会触发该函数。
		// 对响应错误做点什么
		const newError = new Error(error.response?.data?.message || 'Unknown error');
		return Promise.reject(newError);
	}
  );


export default axiosInstance;