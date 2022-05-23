<template>
  <div class='container'>
    <h1 class="title1">TinyMCE</h1>
    <h1 class="title2">富文本编辑器</h1>

    <textarea>
      Welcome to TinyMCE!
    </textarea>
  </div>
</template>
  
<script>
  import { onMounted } from 'vue';

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
          width: '80%'
        });

      })

      return {

      }
    }
  }
</script>
  
<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title1{
    font-size: 40px;
    margin-bottom: 15px;
  }
  .title2{
    font-size: 20px;
    margin-bottom: 20px;
  }
</style>
<style>
  .tox-tinymce{
    margin-bottom: 50px;
  }
</style>