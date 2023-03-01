import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'
import Appendix from '@/views/compreSearch/fileSearch/Appendix.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Appendix,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
        name: 'Home'
      }
    ]
  }
]

// 路由base
/**
 * 单独运行使用
 */

const base = import.meta.env.VITE_APP_MODULE === 'production' ? `/app-${import.meta.env.VITE_APP_BASE_NAME}/` : '/'

const router = createRouter({
  history: createWebHistory(base),
  routes
})

export default router
