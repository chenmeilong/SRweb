import axios from 'axios'

const http = axios.create({
    baseURL: '/api',
    timeout:10000, //超时时间
})

// 添加请求拦截器  ？？？？？  给请求添加header比如token
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器  后端返回的状态码判断拦截  这里暂时没用，只是让我们了解有这个东西
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default http