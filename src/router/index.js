import { createRouter,createWebHistory } from "vue-router";
import Layout from '../layout'

// 所有权限通用路由表
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('../pages/Login'),
    hidden: true
  },
  {
    path:'/',
    component: Layout,
    hidden: true,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('../pages/Dashboard'),
        meta: {
          text: 'Dashboard',
          className: 'iconfont icon-dashboard'
        }
      }
    ]
  },
  {
    path:'/document',
    component: Layout,
    children: [
      {
        path: '/document',
        component: () => import('../pages/Document'),
        meta: {
          text: 'Document',
          className: 'iconfont icon-document_fill'
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('../pages/ErrorPages/Error404'),
    hidden: true
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
    component: Layout,
    children: [
      {
        path:'/permission',
        component:() => import('../pages/Permission'),
        meta: {
          roles: ['admin', 'editor'],
          text: 'Permission',
          className: 'iconfont icon-permission'
        }
      }
    ]
  },
  {
    path:'/todo',
    component: Layout,
    children: [
      {
        path:'/todo',
        component:() => import('../pages/Todo'),
        meta: {
          roles: ['admin'],
          text: 'Todo',
          className: 'iconfont icon-todo'
        }
      }
    ]
  },
  {
    path:'/charts',
    component: Layout,
    children: [
      {
        path:'/charts',
        component:() => import('../pages/Charts'),
        meta: {
          text: 'Charts',
          className: 'iconfont icon-chart'
        }
      }
    ]
  },
  {
    path:'/table',
    component: Layout,
    children: [
      {
        path:'/table',
        component:() => import('../pages/Table'),
        meta: {
          text: 'Table',
          className: 'iconfont icon-table'
        }
      }
    ]
  },
  {
    path:'/component',
    component: Layout,
    children: [
      {
        path:'/component',
        component:() => import('../pages/Component'),
        meta: {
          text: 'Component',
          className: 'iconfont icon-component'
        }
      }
    ]
  },
  {
    path:'/excel',
    component: Layout,
    children: [
      {
        path:'/excel',
        component:() => import('../pages/Excel'),
        meta: {
          text: 'Excel',
          className: 'iconfont icon-excel'
        }
      }
    ]
  },
  {
    path:'/pdf',
    component: Layout,
    children: [
      {
        path:'/pdf',
        component:() => import('../pages/PDF'),
        meta: {
          text: 'PDF',
          className: 'iconfont icon-pdf'
        }
      }
    ]
  },
  {
    path:'/zip',
    component: Layout,
    children: [
      {
        path:'/zip',
        component:() => import('../pages/Zip'),
        meta: {
          text: 'Zip',
          className: 'iconfont icon-zip'
        }
      }
    ]
  },
  {
    path:'/clipboard',
    component: Layout,
    children: [
      {
        path:'/clipboard',
        component:() => import('../pages/Clipboard'),
        meta: {
          text: 'Clipboard',
          className: 'iconfont icon-clipboard'
        }
      }
    ]
  },
  {
    path:'/theme',
    component: Layout,
    children: [
      {
        path:'/theme',
        component:() => import('../pages/Theme'),
        meta: {
          roles: ['admin'],
          text: 'Theme',
          className: 'iconfont icon-theme'
        }
      }
    ]
  },
  {
    path:'/external',
    component: Layout,
    children: [
      {
        path:'/external',
        component:() => import('../pages/ExternalPages'),
        meta: {
          text: 'External',
          className: 'iconfont icon-link'
        }
      }
    ]
  },
  {// 404兜底
    path: "/:catchAll(.*)", // 不识别的path自动匹配404  /:pathMatch(.*)*  /:pathMatch(.*)* 和我用的这个都可以用来兜底
    redirect: '/404',
    component: () => import('../pages/ErrorPages/Error404'),
    hidden: true,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export default router