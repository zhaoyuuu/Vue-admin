<template>
  <div class='container'>
    <span class="iconfont icon-markdown"></span>
    <h1>Markdown</h1>
    <p class="info">基于<a target="blank" href="https://www.npmjs.com/package/@kangc/v-md-editor">v-md-editor</a></p>
    <v-md-editor v-model="text" height="400px"></v-md-editor>
    <h3>Markdown to HTML : </h3>
    <div class="output" v-html="compileMarkDown(text)"></div>
  </div>
</template>
  
<script>
  import { ref } from 'vue'

  export default {
    name:'Markdown',
    setup(){
      let text = ref('# Hello markdown!')
      let converter = new showdown.Converter();
      function compileMarkDown(md){
        return converter.makeHtml(md)
      }

      return {
        text, compileMarkDown
      }

    }
  }
</script>
  
<style scoped lang='scss'>
  .icon-markdown {
    font-size: 30px;
    padding-left: 30px;
    color: $h1Color;
  }
  h1 {
    display: inline-block;
    font-size: 30px;
    padding-bottom: 10px;
    padding-left: 8px;
    color: $h1Color;
  }
  .info {
    font-size: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    a {
      text-decoration: none;
    }
  }
  h3 {
    padding-top: 20px;
    color: green;
    padding-bottom: 20px;
  }
  .output {
    padding: 10px;
    height: 400px;
    background-color: rgb(249, 220, 182);
    border-radius: 20px;
  }
</style>