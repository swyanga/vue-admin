import { RouteRecordRaw } from "vue-router";
import { env } from '@/utils/helper'
// 布局页面
const layouts = import.meta.glob("../layouts/*.vue", { eager: true })

// 子路由页面
const views = import.meta.glob("../views/**/*.vue", { eager: true })

/**
 * 获取布局路由极其子路由
 * @returns 布局路由极其子路由
 */
function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[]
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module)
    route.children = getChildrenRoutes(route)
    layoutRoutes.push(route)
  })
  return layoutRoutes
}

/**
 * 获取布局路由的子路由
 * @param layoutRoute 布局路由
 * @returns 子路由
 */
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(file, module)
      routes.push(route)
    }
  })
  return routes
}

/**
 * {
 *    path: xxx,
 *    component: {},
 *    children: [
 *      ... 
 *    ]
 * }
 * 根据模块组装路由信息
 * @param file 路径名
 * @param module 模块
 * @returns route 路由
 */
function getRouteByModule(file: string, module: any) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
  const route = {
    name: name.replace('/', '.'),
    path: `/${name}`,
    component: module.default
  } as RouteRecordRaw

  return Object.assign(route, module.default?.route)
}

const routes = env.VITE_ROUTER_AUTOLOAD ? getRoutes() : [] as RouteRecordRaw[];

export default routes;
