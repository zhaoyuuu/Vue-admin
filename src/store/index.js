import { createStore } from 'vuex'
import axios from 'axios'
import { getToken, setToken, removeToken } from '../utils/auth'
import {constantRoutes, asyncRoutes} from '../router'

/**
 * 依据路由的meta来判断路由权限
 * @param routes 
 * @param roles 
 * @returns 
 */
function hasPermission(roles,route){
  if(route.meta && route.meta.roles){
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 筛选路由的函数
 * @param routes asyncRoutes
 * @param roles 
 */
function filterAsyncRoutes(routes, roles){
  const res = []
  routes.forEach(route => {
    if(hasPermission(roles,route)){
      if(route.children){
        route.children = filterAsyncRoutes(route.children, roles)
      }
      res.push(route)
    }
  })
  return res
}

export default createStore({
  state(){
    return{
      token: getToken(),
      roles: [],
      avatar: '',
      introduction: '',
      name: '',
      addRoutes: [], //将要动态添加的路由
      routes: [], //addRoutes + constantRoutes

    }
  },
  actions: {
    // 登录埋cookie
    loginByUsername({ commit, state }, userinfo){
      const { username, password } = userinfo
      axios.post('/my-admin/user/login').then(response => {
        // console.log('response: ', response.data[username].token);
        const {token} = response.data[username]
        setToken(token)
        commit('SET_TOKEN', token)
      })
    },

    // 获取用户信息
    getInfo({commit}){
      return new Promise((resolve,reject)=>{
        axios.get('/my-admin/user/info').then(response => {
          const token = getToken()
          // console.log('getinfo: ', token);
          const data = response.data[token]  // data：用户信息对象

          if(!data){
            reject('Verification failed, please Login again.')
          }

          const { avatar, introduction, name, roles } = data

          if(!roles || roles.length <= 0){
            reject('getInfo: roles must be a non-null array!')
          }

          commit('SET_ROLES', roles)
          commit('SET_AVATAR', avatar)
          commit('SET_INTRODUCTION', introduction)
          commit('SET_NAME', name)
          resolve(data)
        })
      }).catch(err=>{
        reject(err)
      })
      
    },

    // generateRoutes 动态生成路由表
    generateRoutes({commit}, roles){
      return new Promise((resolve,reject) => {
        let accessedRoutes
        if(roles === 'admin'){// admin可以看所有的路由
          accessedRoutes = asyncRoutes || []
        } else {// 不是admin，路由要筛选一道
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles) // accessedRoutes是异步路由中有权限的部分路由
        }
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      })
    }

  },
  mutations: {

    SET_TOKEN: (state, token) => {
      // console.log('token埋好了');
      state.token = token
    },

    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_NAME: (state, name) => {
      state.name = name
    },

    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    }

  },
  getters: {

  }
})