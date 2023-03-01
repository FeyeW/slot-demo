import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { APIRequestInterceptors, APIRequestConfig } from './types'
import { ElMessage } from 'element-plus'

class APIRequest {
  instance: AxiosInstance
  interceptors?: APIRequestInterceptors

  constructor(config: APIRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)

    // 保存基本信息(config)
    this.interceptors = config.interceptors

    // 单独请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )

    // 全局拦截器
    this.instance.interceptors.request.use(
      config => config,
      error => error
    )
    this.instance.interceptors.response.use(
      res => {
        const data = res.data
        if (data.code !== 200) {
          console.log(`请求失败，code：${data.code}`)
        } else {
          return data
        }
      },
      error => {
        if (error.response?.status === 404) {
          console.log('404请求')
        }
        return error
      }
    )
  }

  // 封装request
  request<T = any>(config: APIRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        // 单独请求拦截
        config = config.interceptors.requestInterceptors(config)
      }
      this.instance
        .request<any, T>(config)
        .then(res => {
          if (config.interceptors?.responseInterceptors) {
            // 单独响应拦截
            res = config.interceptors.responseInterceptors(res)
          }
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  // 请求方式
  get<T = any>(config: APIRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: APIRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: APIRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  put<T = any>(config: APIRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }

  patch<T = any>(config: APIRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default APIRequest
