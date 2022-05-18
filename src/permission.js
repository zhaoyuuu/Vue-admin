import router from './router'
import store from './store'
import { getToken } from './utils/auth'

// 免登录白名单，避免重定向死循环
const whiteList = ['/login']

router.beforeEach(async (to,from,next) => {
  // 查看用户是否已经登录
  const hasToken = getToken()
  console.log('hasToken: ',hasToken);

  if(hasToken){
    if(to.path === '/login'){
      // 用户已经登录，重定向至首页/dashboard
      next({path: '/'})
    } else {
      // 判断用户是否已经获得了role
      const hasRoles = store.state.roles.length>0 ? store.state.roles : false
      if(hasRoles){
        next()
      } else {
        // 得到用户的roles值
        const {roles} = await store.dispatch('getInfo')
        console.log('roles: ', roles);

        // 基于roles生成路由表
        const accessRoutes = await store.dispatch('generateRoutes', roles)

        router.addRoute(accessRoutes)

        next()

      }
    }
  } else {
    if(whiteList.indexOf(to.path) >= 0){// 如果要去白名单里的地址，直接放过
      console.log('放过');
      next()
    } else {
      next(`/login?1211`)
    }
  }
})
