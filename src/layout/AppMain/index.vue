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
    padding-left: 10px;
    padding-top: 10px;
  }
</style>