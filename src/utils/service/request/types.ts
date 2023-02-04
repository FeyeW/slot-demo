import { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义拦截器类
export interface APIRequestInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptors?: (res: T) => T
  responseInterceptorsCatch?: (error: any) => any
}

// 定义扩展类
export interface APIRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: APIRequestInterceptors<T>
}
