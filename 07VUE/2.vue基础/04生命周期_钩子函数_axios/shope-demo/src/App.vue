<template>
  <div>
    <MyHeader title="购物车案例"></MyHeader>
    <div class="main">
      <MyGoods v-for="obj in list" :key="obj.id"
      :gObj="obj"
      ></MyGoods>
    </div>
    <MyFooter @changeAll="allFn" :arr="list"></MyFooter>
  </div>
</template>

<script>
// 目标: 项目初始化 - 静态页面
// 1. 创建项目, 下包, 引入bs样式
// 2. 拆分需求组件, 创建 - 分别标签+样式
// 3. App.vue上显示, 微调样式(上下内边距)

// 目标: 数据 铺设到MyGoods组件上
// 1. 数据在data保存一下(页面只能用data里值)
// 2. 页面v-for循环MyGoods组件
// 3. 分别传入obj数据对象 (一对一关系) 
// 4. 内部使用数据对象值渲染到标签上

import MyHeader from './components/MyHeader'
import MyGoods from './components/MyGoods'
import MyFooter from './components/MyFooter'
export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  data(){
    return {
      list: [] // 商品所有数据
    }
  },
  created(){
    // 不必在自己引入axios变量, 而是直接使用全局属性$axios
    this.$axios({
      url: "/api/cart"
    }).then(res => {
      console.log(res);
      this.list = res.data.list
    })
  },
  methods: {
    allFn(bool){
      this.list.forEach(obj => obj.goods_state = bool)
      // 把MyFooter内的全选状态true/false同步给所有小选框的关联属性上
    }
  }
}
</script>

<style scoped>
  .main{
    padding-top: 45px;
    padding-bottom: 50px;
  }
</style>