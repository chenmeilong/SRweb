<template>
  <div>
    <div>
      <span>用户名:</span>
      <!-- 1. v-model
         双向数据绑定
         value属性 - vue变量
       -->
      <input type="text" v-model="username">
    </div>
    <div>
      <span>密码: </span>
      <input type="password" v-model="pass">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username: "",
      pass: ""
    }
  }
}
</script>

<style>

</style>