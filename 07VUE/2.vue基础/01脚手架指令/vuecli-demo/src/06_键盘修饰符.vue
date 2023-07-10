<template>
  <div>
    <!-- 1. 绑定键盘按下事件.enter-回车 -->
    <input type="text" @keydown.enter="enterFn">
    <!-- 2. .esc修饰符 - 取消键 -->
    <hr>
    <input type="text" @keydown.esc="escFn">
  </div>
</template>

<script>
export default {
  methods: {
    enterFn(){
      console.log("用户按下的回车");
    },
    escFn(){
      console.log("用户按下esc键");
    }
  }
}
</script>

<style>

</style>