<template>
<!-- 方法的默认第一个参数是$event -->
   <div>
     <button @click="addCount(10)">+1</button>
     <button @click="AddAsyncCount">Async +</button>
     <button @click="getAsyncCount(10000)">(辅助)Async + </button>
     <!-- getters -->
     <div>原始形式：{{ $store.getters.filterList }}</div>
     <div>辅助形式：{{ filterList }}</div>
   </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters }  from 'vuex'
export default {
  methods: {
    //   原始形式
    //   addCount () {
    //       // commit(mutation名称, 载荷)
    //      this.$store.commit("addCount", 10)  // 提交mutations
    //   },
      ...mapMutations(['addCount']),
      // AddAsyncCount () {
      //   // 原始形式 调用action
      //   this.$store.dispatch('getAsyncCount', 1000)
      // },
      ...mapActions(['getAsyncCount'])
  },
  computed: {
    ...mapGetters(['filterList'])
  }
}
</script>

<style>

</style>