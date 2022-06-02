<template>
  <div class='container'>

    <span class="iconfont icon-fangdajing"></span>

    <span class="iconfont icon-max"></span>

    <span @click="changeLang" >
      <!-- 切换中英文时加上success提示 -->
      <span :plain="true" @click="open2" class="iconfont icon-zhongwen" v-show="isLangShow"></span>
      <span :plain="true" @click="open2" class="iconfont icon-yingwen" v-show="!isLangShow"></span>
    </span>

    <img src="../../icons/user-avatar/user-avatar.gif" alt="user_avatar" title="user-avatar">

    <!-- 下拉菜单 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        <span class="iconfont icon-xiala"></span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <a href="https://github.com/zhaoyuuu/Vue-element-admin" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </el-dropdown-item>
          <el-dropdown-item @click="logout">
            Log Out
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

  </div>
</template>
  
<script>
  import {ref} from 'vue'
  import { ElMessage } from 'element-plus' 
  import store from '../../store'

  export default {
    name:'RightMenu',
    setup(){
      let isLangShow = ref(true)
      function changeLang(){
        isLangShow.value = !isLangShow.value
      }

      const open2 = () => {
        ElMessage({
          message: 'Language Switching Succeeded',
          type: 'success',
          duration: 2000
        })
      }

      // logout
      function logout(){
        store.dispatch('logout')
        window.location.reload(); 
        // router.replace('/login')
      }

      return {
        isLangShow,
        changeLang,
        open2,
        logout
      }
    }
  }
</script>
  
<style scoped lang='scss'>
  .container{
    background-color: cadetblue;
    display: inline-block;
    height: 40px;
    border-bottom: 1px solid rgba(231, 226, 226, 0.74);
    .iconfont,
    img {
      width: 22px!important;
      color: #5a5e66;
      float: left;
      cursor: pointer;
      margin-top: 12px;
      margin-right: 14px;
    }
    .icon-fangdajing {
      font-size: 24px;
      font-weight: 700;
    }
    .icon-max{
      margin-top: 13px;
      font-weight: 600;
      font-size: 23px;
    }
    .icon-zhongwen,
    .icon-yingwen {
      margin-top: 12px;
      font-size: 25px;
      margin-right: 20px;
    }
    .icon-xiala{
      font-size: 14px;
      margin-top: 32px;
    }
    img {
      width: 40px!important;height: 40px;
      border-radius: 8px;
      margin-top: 6px;
      margin-right: 5px;
    }
  }
</style>