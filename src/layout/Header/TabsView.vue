<template>
  <div class="container" id="xxx">
    <span class="box">{{[...tabList]}}</span>
  </div>
</template>
  
<script>
  import {ref, onMounted, nextTick} from 'vue'
  import PubSub from 'pubsub-js'

  export default {
    name:'TabsView',
    setup(){
      const tabList = ref([])
      onMounted(() => {
        nextTick(()=>{
          // 使用nextTick，这样才能获取#xxx元素
          let box = document.querySelector('#xxx')
        })
      })
      // 这样获取不到的
      // console.log(document.getElementById('xxx'))
      
      
      // for(let i=0;i<tabList.value.length;i++){
      //   console.log(document.querySelector('.container'))
      // }
      // console.log(tabList.value);
      return{
        tabList
      }
    }
  }
</script>
  
<style scoped lang='scss'>
  .container{
    height: 33px;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba($color: #000000, $alpha: 0.3);
    .box{
      display: inline-block;
      background-color: blueviolet;
      height: 33px;
      line-height: 33px;
      padding-left: 10px;
    }
  }
</style>