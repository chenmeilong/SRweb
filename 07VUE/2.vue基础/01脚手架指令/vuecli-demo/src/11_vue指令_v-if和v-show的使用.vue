<template>
  <div>
    <!-- v-show 或者 v-if
       v-show="vue变量"
       v-if="vue变量"
     -->
    <h1 v-show="isShow">我是h1</h1>
    <h2 v-if="isOk">我是h2</h2>
    <!-- 
      v-show隐藏: 采用display:none   // 频繁切换
      v-if隐藏:   采用从DOM树直接移除 // 移除
     -->

     <!-- v-if和v-else使用 -->
     <p v-if="age >= 18">成年了</p>
     <p v-else>未成年</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShow: false,
      isOk: false,
      age: 2
    }
  }
}
</script>

<style>

</style>