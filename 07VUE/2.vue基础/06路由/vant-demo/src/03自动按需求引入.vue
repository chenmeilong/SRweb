<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>

export default {
    //main.js
    // 方式1: 全局 - 自动按需引入vant组件
    // (1): 下载 babel-plugin-import
    // (2): babel.config.js - 添加官网说的配置 (一定要重启服务器)
    // (3): main.js 按需引入某个组件, Vue.use全局注册 - 某个.vue文件中直接使用vant组件
    // import { Button, Form, Field  } from 'vant';
    // Vue.use(Button) // Button组件全局注册, 真正注册的组件名VanButton
    // Vue.use(Form);
    // Vue.use(Field);
};
</script>

<style>
</style>