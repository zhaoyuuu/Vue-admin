<template>
  <div class="common-layout">
    <el-container>
      <el-aside style="backgroundColor:skyblue;">
        <span class="siderbarBox">
          <Sidebar/>
        </span>
      </el-aside>
      <el-container>
        <el-header style="backgroundColor:coral" height="83px">
          <Header/>
        </el-header>
        <el-main>
          <AppMain/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
<script>
  import Header from './layout/Header/Header.vue'
  import Sidebar from './layout/components/Sidebar/index.vue'
  import AppMain from './views/AppMain.vue'
  import PubSub from 'pubsub-js'
import { nextTick } from '@vue/runtime-core'

  export default {
    name:'App',
    components:{Sidebar, Header,AppMain},
    setup(){
      nextTick(()=>{
        let dom = document.querySelector('.siderbarBox')
        // console.log(dom);
        PubSub.subscribe('wider',(msgName,data)=>{
          dom.style.width=data
        })
        PubSub.subscribe('narrow',(msgName,data)=>{
          dom.style.width=data
        })

      })
      
      
      return{

      }
    }
  }
</script>
  
<style>
  /* 解决sidebar设置position之后原位置丢失而引起布局的影响的bug */
  .siderbarBox{
    width: 54px;
    display: block;
    height: 100%;
    transition: all .2s;
  }
  /* .el-scrollbar__view{
    display: inline-block;
    width: 100px;
    height: 100px;
  } */
  /* 让布局占满屏幕，没有间隙 */
  body {
    display: block;
    margin: 0px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }
  *{
    margin: 0;padding: 0;
  }
  /* Header左右不留间隙 */
  .el-header {
    --el-header-padding: 0px;
  }
  /* 设置盒子border-box,避免盒子被撑大 */
  div {
    box-sizing: border-box;
  }
  /* 取消默认边栏宽度300px */
  .el-aside {
    --el-aside-width: auto;
  }
  .el-main{
    padding: 0;
    background-color: #eff1f4;
    /* 隐藏默认滚动条 */
    overflow-y: hidden;
    overflow-x: hidden;
  }
</style>