import { createRouter,createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard';
import Document from '../views/Document';
import Permission from '../views/Permission';
import Todo from '../views/Todo';
import Charts from '../views/Charts';
import Table from '../views/Table';
import Error401 from '../views/ErrorPages/Error401';
import Error404 from '../views/ErrorPages/Error404';
import Component from '../views/Component';
import Excel from '../views/Excel';
import PDF from '../views/PDF';
import Zip from '../views/Zip';
import Clipboard from '../views/Clipboard';
import Theme from '../views/Theme';
import ExternalPages from '../views/ExternalPages';

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/dashboard',
            component:Dashboard,
            name:'dashboard'
        },
        {
          path:'/document',
          component:Document,
        },
        {
          path:'/permission',
          component:Permission,
        },
        {
          path:'/todo',
          component:Todo,
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
        },
        {
          path:'/external',
          component:ExternalPages,
        }
    ]
})
export default router;