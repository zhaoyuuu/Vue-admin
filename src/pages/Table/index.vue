<template>
  <div class='container'>
    <h1>这些表格可以拖拽哦~</h1>
      <el-table :data="tableData" stripe border>
        <el-table-column prop="id" label="ID" width="100" align="center" />
        <el-table-column prop="author" label="Author" width="150" align="center" />
        <el-table-column prop="importance" label="Importance" width="180" align="center" />
        <el-table-column prop="drag" label="Drag" width="180" align="center" >
          <span class="icon-drag iconfont"></span>
        </el-table-column>>

        <!-- title -->
        <el-table-column prop="title" label="Title" align="center" >
          <el-input v-model="content" placeholder="Please input" clearable />
          <el-button color="#eeb629">Cancel</el-button>
        </el-table-column>

        <!-- actions -->
        <el-table-column prop="actions" label="Actions" width="180" align="center" >
          <!-- <el-button type="primary" :icon="Edit">edit</el-button> -->
          <el-button color=" #95d475">OK</el-button>
        </el-table-column>>
      </el-table>

      <div class="showOrder">
        <div class="defaultOrder">
          <el-tag size="large"> The default order :  </el-tag>
          {{ oldList }}
        </div>
        <div class="currentOrder">
          <el-tag class="ml-2" type="success" size="large"> The after dragging order :  </el-tag>
          {{ newList }}
        </div>
      </div>
  </div>
</template>
  
<script>
  import { onMounted, reactive, ref } from '@vue/runtime-core'
  import { Edit } from '@element-plus/icons-vue'

  export default {
    name:'Table',
    setup(){
      // 表格数据
      const tableData = reactive([
        {
          id: '1',
          title: 'Turn my mic up louder, I got to say something',
          author: 'Tom',
          importance: '★★★★',
          edit: false
        },
        {
          id: '2',
          title: 'Feel it in your chest, the syllables get pumping',
          author: 'Scott',
          importance: '★★',
          edit: false
        },
        {
          id: '3',
          title: 'People on the street they panic and start running',
          author: 'John',
          importance: '★★★★★',
          edit: false
        },
        {
          id: '4',
          title: 'I jump in my mind, I summon the rhyme I\'m dumping',
          author: 'James',
          importance: '★★',
          edit: false
        },
        {
          id: '5',
          title: 'I\'m healing the blind, I promise to let the sun in',
          author: 'Curry',
          importance: '★★★★',
          edit: false
        },
        {
          id: '6',
          title: 'Sick of the dark ways we march to the drumming',
          author: 'Green',
          importance: '★★★★★',
          edit: false
        },
        {
          id: '7',
          title: 'Jump when they tell us that they wanna see jump',
          author: 'Jeffrey',
          importance: '★',
          edit: false
        },
        {
          id: '8',
          title: 'I missed something, take back what\'s yours',
          author: 'Mark',
          importance: '★★★',
          edit: false
        },
        {
          id: '9',
          title: 'Say something that you know they might attack you for',
          author: 'Nancy',
          importance: '★★★★',
          edit: false
        },
        {
          id: '10',
          title: 'Like I\'m stupid standing for what I\'m standing for',
          author: 'Brenda',
          importance: '★★★',
          edit: false
        },
      ])

      // 展示顺序
      const oldList = tableData.map(v => Number(v.id))
      const newList = reactive(oldList.slice())

      // 实现表格拖拽效果
      onMounted(()=>{
        let el = document.querySelector('tbody')
        let sortable =  new Sortable(el, {
          ghostClass: "sortable-ghost", 
          onEnd: (e) => {
            // 将旧位置的值挪到新位置
            const oldValue = newList.splice(e.oldIndex, 1)[0]
            newList.splice(e.newIndex, 0, oldValue)
          }
        })
      })

      let content = ref('')

      return {
        tableData, oldList, newList, Edit, content
      }

    }
  }
</script>
  
<style scoped lang='scss'>
  h1 {
    color: rgb(89, 87, 87);
  }
  .icon-drag{
    font-size: 26px;
    &:hover{
      cursor: pointer;
    }
  }
  .showOrder, 
  .currentOrder{
    padding-top: 20px;
    // font-size: 20px;
  }
  .container{
    padding-bottom: 40px;
    padding-right: 30px;
  }
  .el-input{
    width: 240px;
    margin-right: 16px;
  }
  .el-button{
    color: #fff;
  }
  h1{
    margin-bottom: 20px;
  }
</style>

<style>
  .sortable-ghost{
    background-color: cadetblue !important;
    color: #fff;
  }
</style>