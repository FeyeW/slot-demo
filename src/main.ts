import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerMicroApps, start } from 'qiankun'
import Cookies from 'js-cookie'
import route from './router'
import ElementPlus from 'element-plus'
import localeZh from 'element-plus/lib/locale/lang/zh-cn' // 中文语言
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './styles/style.css' // 全局样式
import '@/styles/elementPlus/index.scss'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// createApp(App)
app.use(createPinia())
app.use(route)
app.use(ElementPlus, {
  locale: localeZh,
  // 支持 large、default、small
  size: Cookies.get('size') || 'default'
})
app.mount('#app')
// .mount('#leanContainer')

/*
 * 注册微应用
 * registerMicroApps([
 *   {
 *     name: 'testApp',
 *     entry: '//localhost:3000',
 *     container: '#leanContainer', // 和app.vue配置的节点
 *     activeRule: '/testApp',
 *     props: {}
 *   }
 * ])
 */

// 启动 qiankun
// eslint-disable-next-line prettier/prettier
start({ prefetch: 'all' })// 预加载
