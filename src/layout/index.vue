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

<script>
  import Header from './Header/Header.vue'
  import Sidebar from './Sidebar'
  import AppMain from './AppMain'
  import PubSub from 'pubsub-js'
  import { nextTick } from '@vue/runtime-core'

  export default {
    name:'Layout',
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
    }
  }
</script>
  
<style lang="scss">
  /* 解决sidebar设置position之后原位置丢失而引起布局的影响的bug */
  .siderbarBox{
    width: 54px;
    display: block;
    height: 100%;
    transition: all .2s;
  }
</style>