<template>
  <div class='container'>
    <img src="./404.png" alt="404" class="animate__animated animate__zoomIn">
    <button class="toHome animate__animated animate__fadeInDown" @click="goHome">Back to Home</button>

    <div class="info animate__animated animate__zoomInDown">
      <div class="oops">OOPS！</div>
      <div class="infos">The webmaster said that you can not enter this page...</div>
      <div class="tips">Please check that the URL you entered is correct, or click the button below to return to the homepage.</div>
      <button @click="goHome">Back to Home</button>
    </div>
    
  </div>
</template>
  
<script>
  import router from '../../router'
  import 'animate.css';

  export default {
    name:'404',
    setup(){

      function goHome(){
        router.push('/dashboard')
      }

      return {
        goHome
      }

    }
  }
</script>
  
<style scoped lang='scss'>
  .container{
    background-image: linear-gradient(0deg, #ff5a34 0%, #fad0c4 40%, #1c3fa9 100%);
    // background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
    height: 100vh;
  }
  img {
    width: 700px;
    position: absolute;
    left: 50px;top: 50px;
  }
  button{
    height: 32px;
    background-color: #ff5a34;
    border: 0;
    border-radius: 18px;
    padding-left: 8px;
    padding-right: 8px;
    color: #e5e9f6;
    box-shadow: 0 2px 3px rgb(63, 61, 61);
    &:hover{
      cursor: pointer;
    }
  }
  .toHome {
    position: absolute;
    left: 345px;top: 130px;
  }
  .info{
    position: absolute;
    top: 100px;
    right: 170px;
    width: 300px;
  }
  .oops{
    font-size: 40px;
    font-weight: 700;
    color: #ef4c27;
    padding-bottom: 20px;
  }
  .infos {
    font-weight: 700;
    font-size: 20px;
    padding-bottom: 10px;
  }
  .tips{
    font-size: 14px;
    color: rgb(105, 95, 95);
    padding-bottom: 20px;
  }
</style>