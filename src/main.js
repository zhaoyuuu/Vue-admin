import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// 引入路由器
import router from './router'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)// 使用路由器
app.mount('#app')