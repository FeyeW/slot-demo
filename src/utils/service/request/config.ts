let BASE_URL_MOCK = ''
const BASE_TIME = 50000

// mock
if (import.meta.env.VITE_APP_MODULE === 'development') {
  BASE_URL_MOCK = 'https://www.fastmock.site/mock/5f0f1e52cfa70877119d9da8932f39ce/dims'
} else if (import.meta.env.VITE_APP_MODULE === 'production') {
  BASE_URL_MOCK = '/prod-api'
}
// 正式
const BASE_URL = import.meta.env.VITE_API_URL

export { BASE_URL_MOCK, BASE_TIME, BASE_URL }
