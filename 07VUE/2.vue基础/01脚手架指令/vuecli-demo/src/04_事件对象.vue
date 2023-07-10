<template>
  <div>
    <a @click="one" href="http://www.baidu.com">百度</a>
    <hr />
    <a @click="two(10, $event)" href="http://www.taobao.com">淘宝</a>
  </div>
</template>

<script>
export default {
  methods: {
    // 1. 事件触发, 无传值, 可以直接获取事件对象是
    one(e){
      e.preventDefault()
    },
    // 2. 事件触发, 传值, 需要手动传入$event
    two(num, e){
      e.preventDefault()
    }
  }
};
</script>

<style>
</style>