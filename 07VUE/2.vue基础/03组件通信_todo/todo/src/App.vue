<template>
  <div class="todoapp">
    <TodoHeader :arr="showArr" @create="createFn"></TodoHeader>
    <TodoMain :arr="showArr" @del="deleteFn"></TodoMain>
    <TodoFooter :farr="showArr" @changeType="typeFn"
    @clear="clearFun"
    ></TodoFooter>
  </div>
</template>

<script>
// 1. 目标: 创建工程-准备相关组件文件-标签+样式 (静态)
// 1.0 样式引入
import "./styles/base.css"
import "./styles/index.css"
// 1.1 组件引入
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'
export default {
  // 1.2 组件注册
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  // 2. 目标: 铺设待办任务
  // 2.0 - 准备数据
  data(){
    return {
      // 8.1 默认从本地取值
      list: JSON.parse(localStorage.getItem('todoList')) || [],
      // 6.4 先中转接收类型字符串
      getSel: "all" // 默认显示全部
    }
  },
  methods: {
    createFn(taskName){ // 添加任务
      // 3.3 push到数组里
      let id = this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1
      this.list.push({
        id: id,
        name: taskName,
        isDone: false
      })
    },
    deleteFn(theId){ // 删除任务
      let index = this.list.findIndex(obj => obj.id === theId)
      this.list.splice(index, 1)
    },
    typeFn(str){ // 'all' 'yes' 'no' // 修改类型
      this.getSel = str
    },
    clearFun(){ // 清除已完成
      this.list = this.list.filter(obj => obj.isDone == false)
    }
  },
  // 6.5 定义showArr数组 - 通过list配合条件筛选而来
  computed: {
    showArr(){
      if (this.getSel === 'yes') { // 显示已完成
        return this.list.filter(obj => obj.isDone === true)
      } else if (this.getSel === 'no') { // 显示未完成
        return this.list.filter(obj => obj.isDone === false)
      } else {
        return this.list // 全部显示
      }
    }
  },
  // 8. 目标: 数据缓存
  watch: {
    list: {
      deep: true,
      handler(){
        // 8.0 只要list变化 - 覆盖式保存到localStorage里
        localStorage.setItem('todoList', JSON.stringify(this.list))
      }
    }
  }
}
</script>

<style>

</style>