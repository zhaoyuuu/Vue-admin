<template>
  <div class="container">
     <Navbar/>
     <TabsView/>
  </div>
</template>
  
<script>
  import Navbar from './Navbar.vue'
  import TabsView from './TabsView.vue'

  export default {
    name:'Header',
    components: {Navbar, TabsView}
  }
</script>
  
<style scoped lang='scss'>
  .container{
    width: 100%;
  }
  
</style>