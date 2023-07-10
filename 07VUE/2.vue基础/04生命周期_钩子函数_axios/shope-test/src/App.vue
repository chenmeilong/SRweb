<template>
  <dir class="main-app">
    <MyHeader title="购物车案例"></MyHeader> 
    <div id="main-goods">
      <MyGoods v-for="obj in list" :key="obj.id" :goods="obj"></MyGoods> 
    </div>
    <MyFooter  @checkAll="checkAll" :listGoods="list"></MyFooter>
    

  </dir>
</template>

<script>

import MyFooter from './components/MyFooter.vue'
import MyGoods from './components/MyGoods.vue'
import MyHeader from './components/MyHeader.vue'
export default {
  components:{
    MyFooter,MyGoods,MyHeader
  },
  data(){
    return {
      list : [] 
    }
  },
  created(){
    this.$axios({
      url:"/api/cart",
      method:'get'
    }).then(res=>{
      // console.log(res)
      this.list=res.data.list
      console.log(this.list)
    })
  },
  methods:{
    checkAll(value){
      this.list.forEach(obj=>obj.goods_state=value)
    }
  }
}
</script>

<style>
#main-goods{
  padding-top:45px;
  padding-bottom:50px;
}
.main-app{
  padding-left:0px;
}
</style>