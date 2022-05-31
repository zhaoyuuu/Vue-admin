import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import store from './store'  // 引入vuex
import router from './router'  // 引入路由器
import "./mock/user"  // 引入mockjs文件
import "./mock/table"  // 引入mockjs文件
import './permission'  // permission control
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(VueMarkdownEditor);
app.mount('#app')