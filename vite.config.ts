import { ConfigEnv, UserConfigExport, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from './vite/alias';
import { parseEnv } from './vite/util';
import setupPlugins from './vite/plugins'

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build';
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root));

  return {
    plugins: setupPlugins(isBuild, env),
    // 配置别名
    resolve: {
      alias
    }
  }
}
