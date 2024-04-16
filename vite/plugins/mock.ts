import { viteMockServe } from 'vite-plugin-mock'

export function setupMockPlugin(isBuild: boolean) {
  return viteMockServe({
    // 设置模拟.ts文件的存储文件夹
    mockPath: 'mock',
    // 是否启用 mock 功能
    enable: !isBuild,
  })
}