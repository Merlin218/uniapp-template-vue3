import axios from 'axios';
import mpAdapter from 'axios-miniprogram-adapter';
import configs from '../../configs';
import { addPending, removePending } from './cancel'; //取消重复请求
import { httpErrorStatusHandle } from './error'; //错误信息显示
import store from '../../store';

axios.defaults.adapter = mpAdapter; // 适配小程序

//请求配置
export function request(axiosConfig, customConfigs) {
  const service = axios.create({
    baseURL: configs.baseUrl, // 设置统一的请求前缀
    // baseURL: import.meta.env.VITE_APP_BASEURL as string, // 设置统一的请求前缀
  });

  const custom_configs = Object.assign(
    {
      repeat_request_cancel: true, //取消重复请求，默认为true
      loading: true, // 是否开启loading层效果, 默认为true
      data_format: true, // 是否开启简洁的数据结构响应, 默认为true
    },
    customConfigs,
  );

  service.interceptors.request.use(
    (config) => {
      removePending(config);
      custom_configs.repeat_request_cancel && addPending(config);

      // 配置token
      if (store.getters['getToken']) {
        config.headers[configs.tokenName] = store.getters['getToken'];
      }

      return config;
    },
    (err) => {
      return Promise.reject(err);
    },
  );
  service.interceptors.response.use(
    (res) => {
      removePending(res.config);
      if (res.data.code / 100 == '2') {
        return custom_configs.data_format ? res.data : res;
      } else {
        return Promise.reject(res.data);
      }
    },
    async (err) => {
      err.config && removePending(err.config);
      custom_configs.loading && httpErrorStatusHandle(err);
    },
  );

  return service(axiosConfig);
}

//封装创建请求
export function createRequest(requestConfig, customRequest) {
  return new Promise((resolve, reject) => {
    request(requestConfig, customRequest)
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
