<template>
    <router-view></router-view>
</template>
  
<script>
  export default {
    name:'App'
  }
</script>
  
<style lang="scss">
  /* 登陆页面背景颜色 */
  $loginBgColor: #2d3a4b;
  /* 让app的高占满全屏 */
  #app{
    height: 100vh;
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
    // background-color: #eff1f4;
    /* 隐藏默认滚动条 */
    overflow-y: hidden;
    overflow-x: hidden;
  }
</style>