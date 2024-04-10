import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'

export function setupPlugins(app: App) {
  // 注册插件
  setupTailwindcss()
  // ...
}