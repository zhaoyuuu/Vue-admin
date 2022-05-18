<template>
  <div class='container'>
    <!-- 指定路由的呈现位置 -->
    <router-view></router-view>
  </div>
</template>
  
<script>
  import Clipboard from '../../pages/Clipboard'
  import Component from '../../pages/Component'
  import Dashboard from '../../pages/Dashboard'
  import Document from '../../pages/Document'
  import Excel from '../../pages/Excel'
  import ExternalPages from '../../pages/ExternalPages'
  import PDF from '../../pages/PDF'
  import Permission from '../../pages/Permission'
  import Table from '../../pages/Table'
  import Theme from '../../pages/Theme'
  import Zip from '../../pages/Zip'
  import Todo from '../../pages/Todo'

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