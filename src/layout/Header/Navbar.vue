<template>
  <div class="container">
      <!-- 拉开svg -->
     <div class="hamburger">
        <span @click="pullOut" class="iconfont icon-moren_lachu" v-show="isIconShow"></span>
        <span @click="pullBack" class="iconfont icon-lachu" v-show="!isIconShow"></span>
     </div>
     <!-- 面包屑 -->
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">Dashboard</el-breadcrumb-item>
      <el-breadcrumb-item>Table</el-breadcrumb-item>
    </el-breadcrumb>

     <div class="rightMenu">
       <RightMenu/>
     </div>
  </div>
</template>
  
<script>
  import {ref} from 'vue'
  import RightMenu from './RightMenu.vue'
  import pubsub from 'pubsub-js'  // 引入消息订阅库
  import { ArrowRight } from '@element-plus/icons-vue'  // 面包屑icon
  import router from '../../router'
  // import filterRoutesFunc from '../../utils/filterRoutes'  // 筛选路由
  // import store from '../../store'

  export default {
    name:'Navbar',
    components:{RightMenu},
    setup(){
      console.log(router);
      // 拉出拉回图标是否显现
      let isIconShow = ref(true)

      function pullOut(){
        pubsub.publish('wider', '200px')
        // 切换拉回图标
        isIconShow.value = false
      }
      function pullBack(){
        pubsub.publish('narrow', '54px')
        // 切换拉出图标
        isIconShow.value = true
      }

      // 筛选出路由
      // const routes = store.state.routes  // 所有有权限的路由
      // const filterRoutes = filterRoutesFunc(routes)
      // console.log(filterRoutes);

      return{
        pullOut,
        isIconShow,
        pullBack,
        ArrowRight,
        // filterRoutes
      }
    }
  }
</script>
  
<style lang="scss" scoped>
  .container{
    height: 50px;
    background-color:#fff;
    .hamburger{
      float: left;
      display: inline-block;
      width: 50px;height: 50px;
      text-align: center;
      line-height: 50px;
      // background-color: cornflowerblue;
      &:hover{
        cursor: pointer;
        background-color: rgba(240, 233, 233, 0.459);
      }
      .icon-moren_lachu{
        display: inline-block;
        width: 50px!important;
        font-size: 20px;
      }
      .icon-lachu{
        // 加important以消除element.style默认宽度的影响
        width: 50px!important;
        display: inline-block;
        font-size: 16px;
      }
    }
    .bread_crumb{
      float: left;
      display: inline-block;
      padding-left: 10px;
      padding-top: 14px;
    }
    .rightMenu{
      display: inline-block;
      width: 200px;
      height: 50px;
      float: right;
    }
  }
  // 面包屑
  .el-breadcrumb {
    line-height: 50px;
    display: inline-block;
  }
</style>