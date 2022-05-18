import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import store from './store'  // 引入vuex
import router from './router'  // 引入路由器
import "./mock/user"  // 引入mockjs文件
import './permission'  // permission control

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')