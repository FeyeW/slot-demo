// service统一出口
import APIRequest from '@/utils/service/request/request'
import { APIRequestConfig } from '@/utils/service/request/types'
import { BASE_URL_MOCK, BASE_TIME, BASE_URL } from './request/config'
import { getToken } from '@/utils/auth'

const apiRequest = new APIRequest({
  baseURL: BASE_URL,
  timeout: BASE_TIME,
  interceptors: {
    requestInterceptors: (config: APIRequestConfig) => {
      const token = getToken()
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    }
  }
})

const userInfo = new APIRequest({
  baseURL: '',
  timeout: 20000,
  interceptors: {
    requestInterceptors: (config: APIRequestConfig) => {
      const token = getToken()
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
        config.headers['x-token'] = '11'
      }
      return config
    }
  }
})

export default {
  apiRequest
}
