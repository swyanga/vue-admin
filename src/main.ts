import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router, { setupRouter } from '@/router'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)

  // 让路由完全处理好之后再挂载应用
  await router.isReady()
  app.mount('#app')
}

bootstrap();
