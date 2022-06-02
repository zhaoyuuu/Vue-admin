<template>
  <div class='container'>
    <span class="iconfont icon-richtext"></span>
    <h1 class="title1">富文本编辑器</h1>
    <h1 class="title2">基于<a href="https://github.com/tinymce/tinymce" target="blank">TinyMCE</a></h1>

    <textarea>
      Welcome to my Rich-Text!
    </textarea>
  </div>
</template>
  
<script>
  import { onMounted, ref } from 'vue';
  import NProgress from 'nprogress'
  import 'nprogress/nprogress.css'

  export default {
    name:'RichText',
    setup() {
      
      onMounted(() => {

        tinymce.init({
          selector: 'textarea',
          plugins: 'a11ychecker advcode casechange export formatpainter image editimage linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tableofcontents tinycomments tinymcespellchecker',
          toolbar: [
            'newdocument bold italic underline strikethrough alignleft aligncenter alignright alignjustify styleselect styleselect formatselect fontselect fontsizeselect code export formatpainter' ,  
            'image  table undo redo blockquote subscript superscript hr codesample forecolor  backcolor checklist numlist '
          ],
          skin: 'oxide',
          language: 'zh_CN',
          toolbar_mode: 'floating',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          width: '90%'
        }).then(()=>{
          NProgress.done()
        })

        

      })

      return {
        
      }
    }
  }
</script>
  
<style lang="scss" scoped>
  .container {
    padding-left: 50px;
  }
  .icon-richtext {
    color: $h1Color;
    font-size: 30px;
    padding-left: 20px;
    padding-right: 10px;
  }
  .title1{
    display: inline-block;
    font-size: 30px;
    color: $h1Color;
    margin-bottom: 15px;
  }
  .title2{
    padding-left: 20px;
    font-size: 20px;
    margin-bottom: 20px;
    a {
      text-decoration: none;
    }
  }
</style>
<style>
  .tox-tinymce{
    margin-bottom: 50px;
  }
</style>