# my-element-admin

## 文章链接
在做这个项目的时候我还遇到了很多坑，也收获了不少。我将文章发表在了[掘金](https://juejin.cn/post/7104567500041355272)上，如果你和我一样是初学者（自学前端不到一年）或者对后台管理项目感兴趣，欢迎你阅读我的拙作。

## 思路梳理
目录结构：

    |— dist
    |— public
        |— favicon.ico
        |— index.html

    |— src
        |— assets
        |— icons
        |— layout
        |— mock
        |— pages
        |— router
        |— store
        |— styles
        |— utils
        |— vendor
        |— .eslintrc.js
        |— App.vue
        |— main.js
        |— permission.js

    |— package.json
    |— vue.config.js
    |— README.md

## 布局

大多数页面都是基于这个layout的，除了个别页面，比如:404、login。

页面呈现是基于嵌套路由实现的，所以一般情况下，你增加或者修改页面只会影响app-main这个主体区域，而侧边栏和导航栏不会变化。

嵌套路由具体实现（以document为例）：
```js
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
}
```

Layout.vuehtml结构如下：
```html
<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <span class="siderbarBox">
          <Sidebar/>
        </span>
      </el-aside>
      <el-container>
        <el-header style="backgroundColor:coral" height="50px">
          <Header/>
        </el-header>
        <el-main>
          <AppMain/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
```
其中AppMain组件的html结构：
```html
<template>
  <div class='container'>
    <!-- 指定路由的呈现位置 -->
    <router-view></router-view>
  </div>
</template>
```
## 侧边栏和路由
> 侧边栏和路由是绑定在一起的。
### 侧边栏
登录的时候获取到role，基于role动态生成路由表。再基于这个路由表，把需要展示到侧边栏的路由筛选出来，展示到侧边栏。

怎么筛选需要展示到侧边栏的路由？

> 那些不需要展示的路由我都配置了一个hidden属性，值为true。在utils/filyerRoutes.js文件里定义了一个筛选函数，这个函数会判断有没有hidden属性，如果没有hidden属性就将这个路由压入到新的路由数组里。
Sidebar组件拿到这个新生成的路由数组，遍历呈现到侧边栏。
### 路由
路由分为两种：`constantRoutes` 和 `asyncRoutes`。

- constantRoutes：不需要判断权限的路由，如：登录页、404等。
- asyncRoutes：需要判断权限，再通过addRoute动态添加的路由。

## 登录和权限验证（重要）
对于路由的管理和权限的验证都是基于`vuex`实现的。
### 登录
用户填完账号密码之后向服务器验证是否正确并获得身份（admin / editor），服务器基于role返回token。拿到token之后（将token贮存到cookie中，保证刷新页面后记住用户状态），前端会根据token向user_info接口抓取用户信息（role / avatar / introduction / ...）
### 权限验证
上面说的获取到用户的role，根据role算出其对应的路由权限，通过router.addRoute动态加载路由。

permission.js部分代码：
```js
/**
 * 基于roles生成路由表 
 * accessRoutes 异步路由中有权限的部分路由
 */
const accessRoutes = await store.dispatch('generateRoutes', roles)

// 遍历accessRoutes动态添加路由
accessRoutes.forEach(route => {
  router.addRoute(route)
})
```
