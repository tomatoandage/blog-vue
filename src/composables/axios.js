import axios from "axios"
import { getToken, removeToken } from "./auth";
import { showMessage } from "./util";

//创建Axios实例
const instance = axios.create({
  baseURL: "/api",
  timeout: 7000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 
  // 在发送请求之前做些什么
  const token = getToken()

  // 如果存在token，则每个http header都加上token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  if (error.response.status === 401) {
    removeToken()
    window.location.href = '/login'
  }
  let message = error.response.data.message || '请求失败'
  showMessage(message, 'error')
  return Promise.reject(error);
});

export default instance