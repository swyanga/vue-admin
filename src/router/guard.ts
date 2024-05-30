import store from "@/utils/store";
import { Router, RouteLocationNormalized } from "vue-router";

class Guard {
  constructor(private router: Router) { }

  public run() {
    this.router.beforeEach((to, from) => {
      let token = store.get('token')?.token

      if (this.isLogin(to, token) === false) return { name: 'login' }
      if (this.isGuest(to, token) === false) return { name: 'home' }

      //TODO 权限
    })
  }

  private isGuest(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.guest || (route.meta.guest && !token))
  }

  private isLogin(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.auth || (route.meta.auth && token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}