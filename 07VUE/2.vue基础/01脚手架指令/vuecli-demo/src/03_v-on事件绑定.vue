<template>
  <div>
    <p>你要购买商品的数量: {{ count }}</p>
    <!-- 1. 绑定事件
     语法: v-on:事件名="少量代码"
     语法: v-on:事件名="methods里函数名"
     语法: v-on:事件名="methods里函数名(值)"
     语法: @事件名="methods里函数名"
     -->
    <button v-on:click="count = count + 1">+1</button>
    <button v-on:click="addFn">+1</button>
    <button v-on:click="addCountFn(5)">+5</button>
    <button @click="subFn">减少1</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 1
    }
  },
  // 2. 定义函数
  methods: {
    addFn(){ // this代表export default后{}对象, data和methods里的属性都直接挂在它身上
      this.count++
    },
    addCountFn(num){
      this.count = this.count + num
    },
    subFn(){
      this.count--
    }
  }
}
</script>

<style>

</style>