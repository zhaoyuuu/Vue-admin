<template>
  <div class='container'>
    <!-- 指定路由的呈现位置 -->
    <router-view></router-view>

  </div>
</template>
  
<script>

  export default {
    name:'AppMain'
  }
</script>
  
<style scoped lang='scss'>
  .container{
    height: 100%;
    background-color: #eff1f4;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;
  }
</style>