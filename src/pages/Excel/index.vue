<template>
  <div class='container'>
    <h1>Excel</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Author</th>
        <th>Title</th>
        <th>Importance</th>
      </tr>
      <!-- <tr v-for="(d,index) in data" :key="index">
        <td>{{ d.id }}</td>
        <td>{{ d.author }}</td>
        <td>{{ d.title }}</td>
        <td>{{ d.importance }}</td>
      </tr> -->
    </table>
  </div>
</template>
  
<script>
  import axios from 'axios'

  export default {
    name:'Excel',
    setup(){
      
      axios.get('/my-admin/table/info')

      return {
        
      }

    }
  }
</script>
  
<style scoped lang='scss'>
  table {
    margin-top: 30px;
    border-top: 1px solid #ebeef5;
    border-left: 1px solid #ebeef5;
    border-collapse: collapse;
    width: 90%;
    background-color: #fff;
    td, th {
      border-right: 1px solid #ebeef5;
      border-bottom: 1px solid #ebeef5;
    }
  }
</style>