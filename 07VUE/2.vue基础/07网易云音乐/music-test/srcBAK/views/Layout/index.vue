<template>
  <div>
    <van-nav-bar
      :title="this.$route.meta.titleName"
    />
    <router-view></router-view>
    <van-tabbar route>
    <van-tabbar-item replace to="/layout/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },

}
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>