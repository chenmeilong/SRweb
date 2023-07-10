<template>
  <div>
    <van-button type="primary" @click="btn">主要按钮</van-button>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  methods: {
    btn() {
      Dialog({ message: "提示", showCancelButton: true }); // 调用执行时, 页面就会出弹出框
    },
  },
};
</script>

<style>
</style>