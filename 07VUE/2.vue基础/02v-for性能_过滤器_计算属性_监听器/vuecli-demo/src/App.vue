<template>
  <div>
    <div>{{arr}}</div>
    <button @click="btn">测试响应式</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1,2],
    };
  },
  methods: {
    btn(){
      this.arr.push(13)
    }
  }
};
</script>

<style>
</style>