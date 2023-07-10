<template>
  <div id="app">
     <!-- 原始形式 使用 state -->
     <div>插值表达式：{{ $store.state.count }}</div>
     <div>计算属性：{{ count }}</div>
     <child-a></child-a>
     <child-b></child-b>
  </div>
</template>

<script>
import { mapState }  from 'vuex'
import ChildA  from './components/child-a'
import ChildB  from './components/child-b'

export default {
  name: 'App',
  components: {
    ChildA, ChildB
  },
  computed: {

    // <div>插值表达式：{{ $store.state.count }}</div>  可以这样只有调用
    //法一
    // count () {
    //   return this.$store.state.count
    // },

    //法二 import { mapState }  from 'vuex'
    ...mapState(['count'])   //是辅助函数，帮助我们把store中的数据映射到 组件的计算属性中, 它属于一种方便用法
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
