<template>
  <div>
      <!-- 显示用户的token的网站的名称 -->
      <div>用户的token: {{ $store.state.user.token }}</div>
      <div>getters快捷访问：{{ token }}</div>
      <div>网站的名称：{{ $store.state.setting.name }}</div>
      <div>getters快捷访问：{{ name }}</div>
      <button @click="updateToken">更新子模块的token</button>
      <!-- <button @click="test">调用子模块的mutations</button> -->
  </div>
</template>

<script>
import { mapGetters, createNamespacedHelpers }  from 'vuex'
const { mapMutations } =  createNamespacedHelpers('user')
export default {
  computed: {
      ...mapGetters(['token', 'name'])
  },
  methods: {
      // updateToken () {
      //   //   采用路径形式调用
      //     this.$store.commit('user/updateToken')
      // },
      // ...mapMutations(['user/updateToken']),
      // 第二种方案
      // test () {
      //     this['user/updateToken']()
      // },
      ...mapMutations(['updateToken'])
  }
}
</script>

<style>

</style>