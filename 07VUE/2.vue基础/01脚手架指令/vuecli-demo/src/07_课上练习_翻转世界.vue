<template>
  <div>
    <!-- 1. 变量准备-静态页面铺设 -->
    <h1>{{ msg }}</h1>
    <!-- 2. 绑定点击事件 -->
    <button @click="btn">逆转世界</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg: "Hello, World"
    }
  },
  methods: {
    btn(){
      // // 3. 截取字符串返回数组
      // let arr = this.msg.split("")
      // // 4. 翻转
      // arr.reverse()
      // // 5. 数组拼接起来
      // this.msg = arr.join("")

      // 简化
      this.msg = this.msg.split("").reverse().join("")
    }
  }
}
</script>

<style>

</style>