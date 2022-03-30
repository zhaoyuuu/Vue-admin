<template>
  <div class='container'>
    <!-- 指定路由的呈现位置 -->
    <router-view></router-view>
  </div>
</template>
  
<script>
  import Clipboard from './Clipboard'
  import Component from './Component'
  import Dashboard from './Dashboard'
  import Document from './Document'
  import Excel from './Excel'
  import ExternalPages from './ExternalPages'
  import PDF from './PDF'
  import Permission from './Permission'
  import Table from './Table'
  import Theme from './Theme'
  import Zip from './Zip'
  import Todo from './Todo'

  export default {
    name:'AppMain',
    components:{
      Clipboard,Component,Dashboard,Document,Excel,
      ExternalPages,PDF,Permission,Table,Theme,Zip,Todo
    },
    setup(){
      

      return{}
    }
  }
</script>
  
<style scoped lang='scss'>
  .container{
    width: 100%;height: 100%;
    background-color: #eff1f4;
  }
</style>