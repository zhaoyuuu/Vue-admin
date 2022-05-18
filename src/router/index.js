import { createRouter,createWebHistory } from "vue-router";
import Dashboard from '../pages/Dashboard';
import Document from '../pages/Document';
import Permission from '../pages/Permission';
import Todo from '../pages/Todo';
import Charts from '../pages/Charts';
import Table from '../pages/Table';
import Error401 from '../pages/ErrorPages/Error401';
import Error404 from '../pages/ErrorPages/Error404';
import Component from '../pages/Component';
import Excel from '../pages/Excel';
import PDF from '../pages/PDF';
import Zip from '../pages/Zip';
import Clipboard from '../pages/Clipboard';
import Theme from '../pages/Theme';
import ExternalPages from '../pages/ExternalPages';
import Login from '../pages/Login'
import Layout from '../layout'

// 所有权限通用路由表
export const constantRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path:'/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: Dashboard
      }
    ]
  },
  {
    path:'/document',
    component: Layout,
    children: [
      {
        path: '/document',
        component: Document
      }
    ]
  }
]

/**
 * 需要基于roles动态加载的路由  
 * Permission => ['admin','editor']
 * Todo / Theme => ['admin']
 */ 

export const asyncRoutes = [
  {
    path:'/permission',
    component:Permission,
    meta: {
      roles: ['admin', 'editor']
    }
  },
  {
    path:'/todo',
    component:Todo,
    meta: {
      roles: ['admin']
    }
  },
  {
    path:'/charts',
    component:Charts,
  },
  {
    path:'/table',
    component:Table,
  },
  {
    path:'/component',
    component:Component,
  },
  {
    path:'/excel',
    component:Excel,
  },
  {
    path:'/pdf',
    component:PDF,
  },
  {
    path:'/zip',
    component:Zip,
  },
  {
    path:'/clipboard',
    component:Clipboard,
  },
  {
    path:'/theme',
    component:Theme,
    meta: {
      roles: ['admin']
    }
  },
  {
    path:'/external',
    component:ExternalPages,
  },
  {// 404兜底
    path: '*',
    redirect: '/404',
    component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export default router