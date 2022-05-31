<template>
  <div class='container'>
     <h1>Your role is &nbsp; : &nbsp; <span class="role">{{roles[0]}}</span></h1>
  </div>
</template>
  
<script>
  import store from '../../store'

  export default {
    name:'Permission',
    setup(){
      const {roles} = store.state

      return {
        roles
      }
    }
  }
</script>
  
<style scoped lang='scss'>
  .role {
    color: $h1Color;
    font-size: 26px;
    font-family: 'Courier New', Courier, monospace;
  }
</style>