import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import path from 'path'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig(({ mode }) => {
  const { VITE_APP_BASE_NAME } = loadEnv(mode, process.cwd()) // 获取环境
  return {
    base: './', // 独立运行时使用
    plugins: [
      vue(),
      qiankun(`${VITE_APP_BASE_NAME}`, { useDevMode: true })

      /*
       * 按需引入elementPlus
       * AutoImport({
       *   resolvers: [ElementPlusResolver()],
       * }),
       * Components({
       *   resolvers: [ElementPlusResolver()],
       * }),
       * ElementPlus({
       *   useSource: true,
       * }),
       */
    ],
    define: { 'process.env': {} },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'), // 设置路径
        '@': path.resolve(__dirname, './src') // 设置别名
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
      port: 89, // 运行端口
      host: true, // 允许局域网访问
      open: false, // 运行后是否自动打开浏览器
      headers: { 'Access-Control-Allow-Origin': '*' },
      proxy: {
        // 本地运行代理相关配置
        '/dev-api': {
          target: 'http://192.168.31.136:9204',
          changeOrigin: true,
          rewrite: p => p.replace(/^\/dev-api/, '')
        }
      }
    },
    css: { preprocessorOptions: { scss: { additionalData: '@use "@/styles/common/index.scss" as *;' } } }
  }
})
