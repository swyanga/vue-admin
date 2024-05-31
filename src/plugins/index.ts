import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import setupElementPlus from './elementui'
import _ from 'lodash'

export function setupPlugins(app: App) {
  autoRegisterComponent(app)
  // 注册插件
  setupTailwindcss()
  setupElementPlus(app)
}

// 自动注册全局组件
function autoRegisterComponent(app: App) {
  // 读取所有组件
  const components = import.meta.glob('../components/**/*.vue', { eager: true, import: 'default' })
  // 遍历组件
  Object.keys(components).forEach(key => {
    const name = key.split('/').pop()?.split('.').shift() as string;
    app.component(_.camelCase(name), components[key] || {})
  })
}