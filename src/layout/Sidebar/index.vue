<template>
  <div>
    <el-scrollbar :height="theHeight" style="position:fixed">
      <ul class="iconList">
        <router-link v-for="route in filterRoutes" :key="route.path" :to="route.path" active-class="active">
          <li :class="route.meta.className" >
            <span v-show="isShow" class="text">{{route.meta.text}}</span>
            <!-- <span v-show="i.title==='error' && isShow" class="rightIcon iconfont icon-xiala1"></span> -->
          </li>
        </router-link>
      </ul>
    </el-scrollbar>
  </div>
</template>
  
<script>
  import {computed, ref} from 'vue'
  import pubsub from 'pubsub-js'  // 消息订阅
  import store from '../../store'

  export default {
    name: 'Sidebar',
    setup(){
      const routes = store.state.routes  // 所有有权限的路由
      /**
       * 筛选路由的函数
       * @param routes 
       * @returns 筛选出的函数组成的数组 
       */
      function filterRoutesFunc(routes){
        let res = []
        routes.forEach(route => {
          if(route.children){
            res = res.concat(filterRoutesFunc(route.children))
          } else {
            if(route.hidden !== true){
              res.push(route)
            }
          }
        })
        return res
      }
      const filterRoutes = computed(() => {  // 筛选出显示在侧边栏的路由
        return filterRoutesFunc(routes)
      })
      // 侧边栏数据
      //#region 
      // const sidebarData = reactive([
      //   {
      //     to: '/dashboard',
      //     fontClass: 'iconfont icon-dashboard',
      //     title: 'dashboard',
      //     text: 'Dashboard'
      //   },
      //   {
      //     to: '/document',
      //     fontClass: 'iconfont icon-document_fill',
      //     title: 'document',
      //     text: 'Document'
      //   },
      //   {
      //     to: '/permission',
      //     fontClass: 'iconfont icon-permission',
      //     title: 'permission',
      //     text: 'Permission'
      //   },
      //   {
      //     to: '/todo',
      //     fontClass: 'iconfont icon-todo',
      //     title: 'todo',
      //     text: 'Todo'
      //   },
      //   {
      //     to: '/charts',
      //     fontClass: 'iconfont icon-chart',
      //     title: 'charts',
      //     text: 'Charts'
      //   },
      //   {
      //     to: '/table',
      //     fontClass: 'iconfont icon-table',
      //     title: 'table',
      //     text: 'Table'
      //   },
      //   {
      //     to: '/error',
      //     fontClass: 'iconfont icon-Network-Error',
      //     title: 'error',
      //     text: 'Error Pages'
      //   },
      //   {
      //     to: '/component',
      //     fontClass: 'iconfont icon-component',
      //     title: 'components',
      //     text: 'Components'
      //   },
      //   {
      //     to: '/excel',
      //     fontClass: 'iconfont icon-excel',
      //     title: 'excel',
      //     text: 'Excel'
      //   },
      //   {
      //     to: '/pdf',
      //     fontClass: 'iconfont icon-pdf',
      //     title: 'pdf',
      //     text: 'PDF'
      //   },
      //   {
      //     to: '/zip',
      //     fontClass: 'iconfont icon-zip',
      //     title: 'zip',
      //     text: 'ZIP'
      //   },
      //   {
      //     to: '/clipboard',
      //     fontClass: 'iconfont icon-clipboard',
      //     title: 'clipboard',
      //     text: 'Clipboard'
      //   },
      //   {
      //     to: '/theme',
      //     fontClass: 'iconfont icon-theme',
      //     title: 'theme',
      //     text: 'Theme'
      //   },
      //   {
      //     to: '/external',
      //     fontClass: 'iconfont icon-link',
      //     title: 'external pages',
      //     text: 'External'
      //   }
      // ])
      //#endregion
      // 获取窗口高度
      const theHeight = ref(document.documentElement.clientHeight)
      // 描述文字是否出现
      let isShow = ref(false)
      
      // 订阅来自Navbar的消息
      pubsub.subscribe('wider', (msgName,data)=>{
        // 侧边栏变宽
        let arr = document.querySelectorAll('.iconfont')
        for(let i=0; i<arr.length;i++) {
          arr[i].style.width = data
        }
        // 描述文字显现  注意这里改变isShow的值要写成isShow.value!!!
        isShow.value = true
      })
      pubsub.subscribe('narrow', (msgName,data)=>{
        // 侧边栏变窄
        let arr = document.querySelectorAll('.iconfont')
        for(let i=0; i<arr.length;i++) {
          arr[i].style.width = data
        }
        // 描述文字显现  注意这里改变isShow的值要写成isShow.value!!!
        isShow.value = false
      })

      return{
        isShow,theHeight,routes,filterRoutes
        
      }
    }
  }
</script>
  
<style lang="scss" scoped>
  .iconList{
    a{// router-link样式
      text-decoration: none;
      // active-class非常方便，踩坑！！！
      &.active>li{
        color: rgb(72, 162, 236);
      }
    }
    .iconfont{
      // 给边栏加上过渡效果
      transition: all .2s;
      box-sizing: border-box;
      padding-left: 14px;
      padding-right: 10px;
      line-height: 60px;
      background-color: #304156;
      width: 54px;
      height: 60px;
      color: #bfcbd9;
      font-size: 26px;
      .text{
        font-size: 15px;
        padding-left: 20px;
      }
      .rightIcon{
        width: auto!important;
        float: right;
        padding-top: 4px;
        background-color: transparent;
      }
      .icon-xiala1{
        font-size: 2px;
      }
      &:hover{
        background-color: #263445;
      }
    }
  }
  
</style>