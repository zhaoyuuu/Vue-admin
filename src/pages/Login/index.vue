<template>
  <div class='container'>
    <div class="form">
      <h1>登录</h1>
      <el-input 
        v-model="uname" 
        placeholder="请输入用户名" 
        @keyup.enter="login"
        @input="unameCheck"
      />
      <span v-if="unameCheckValue" class="uname-warn" style="color: #f24749; font-size: 12px">请输入正确的用户名</span>
      <el-input
        v-model="pwd"
        type="password"
        placeholder="请输入密码"
        show-password
        @keyup.enter="login"
        @input="pwdCheck"
      />
      <span v-if="pwdCheckValue" class="pwd-warn" style="color: #f24749; font-size: 12px">不能少于六位字母或数字</span>
      <el-button type="primary" @click="login">登录</el-button>

      <div class="tips">
        <p>Username : admin &emsp;&emsp; Password : any</p>
        <p>Username : editor &emsp;&emsp; Password : any</p>
      </div>
    </div>
  </div>
</template>
  
<script>
  import { ref } from 'vue'
  import store from '../../store'
  import {useRouter} from "vue-router"
  import {validUsername,validPassword} from '../../utils/validate'

  export default {
    name: 'Login',
    setup(){
      const router = useRouter()
      const uname = ref('admin')
      const pwd = ref('111111')
      const unameCheckValue = ref(false)
      const pwdCheckValue = ref(false)

      function unameCheck(){
        unameCheckValue.value = !validUsername(uname.value)
      }
      function pwdCheck(){
        pwdCheckValue.value = !validPassword(pwd.value)
      }

      function login(){
        // console.log('点击了登录');
        if(!unameCheckValue.value && uname.value.trim() !== '' && !pwdCheckValue.value && pwd.value.trim() !== ''){
          // 将用户名和密码打包成一个对象
          const userinfo = {
            username: uname.value,
            password: pwd.value
          }
          store.dispatch('loginByUsername', userinfo)
            .then(()=>{ // 成功之后定向到 /layout 
              // console.log('登录成功！！！');
              router.replace({path: '/'})
            })
            .catch(err => {
              // alert(err) // 登录失败提示错误信息
            })
          }
        
      }

      return{
        uname, pwd, unameCheckValue, pwdCheckValue, 
        login, unameCheck, pwdCheck
      }
    }
  }
</script>
  
<style scoped lang='scss'>
  .container{
    height: 100%;
    background-color: #2d3a4b;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1{
    color: #eeeeee;
    text-align: center;
  }
  .form{
    width: 450px;
  }
  .el-input{
    margin-top: 20px;
  }
  button{
    margin-top: 20px;
    width: 100%;
  }
  .tips{
    margin-top: 10px;
    color: #fff;
    overflow: hidden;
    font-size: 16px;
    p {
      margin-top: 10px;
    }
  }
</style>