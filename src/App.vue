<template>
    <router-view></router-view>
</template>
  
<script>
  export default {
    name:'App'
  }
</script>
  
<style lang="scss">
  
  /* 让app的高占满全屏 */
  #app{
    height: 100vh;
  }
  *{
    margin: 0;padding: 0;
  }
  /* Header左右不留间隙 */
  .el-header {
    --el-header-padding: 0px!important;
  }
  /* 设置盒子border-box,避免盒子被撑大 */
  div {
    box-sizing: border-box;
  }
  /* 取消默认边栏宽度300px */
  .el-aside {
    --el-aside-width: auto!important;
  }
  .el-main{
    padding: 0!important;
    // background-color: #eff1f4;
    /* 隐藏默认滚动条 */
    overflow-y: hidden;
    overflow-x: hidden;
  }
</style>