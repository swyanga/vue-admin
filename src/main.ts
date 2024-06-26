import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from './plugins'
import './style.css'
import '@/styles/global.scss'


async function bootstrap() {
  const app = createApp(App)
  // 路由
  setupRouter(app)
  // 插件
  setupPlugins(app)
  // 让路由完全处理好之后再挂载应用
  await router.isReady()
  app.mount('#app')
}

bootstrap();
