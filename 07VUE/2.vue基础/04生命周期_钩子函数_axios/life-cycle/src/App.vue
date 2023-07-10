<template>
  <div>
    <h1>1. 生命周期</h1>
    <Life v-if="show"></Life>
    <button @click="show = false">销毁组件</button>
    <hr>
    <h1>2. axios使用</h1>
    <UseAxios></UseAxios>
    <hr>
    <h1>3. $refs的使用</h1>
    <Ref></Ref>
    <hr>
    <h1>4. $nextTick使用场景</h1>
    <Tick></Tick>
    <hr>
    <h1>5. 组件对象里name属性</h1>
    <ComNameHaHa></ComNameHaHa>
  </div>
</template>

<script>
import Life from './components/Life'
import UseAxios from './components/UseAxios'
import Ref from './components/Ref'
import Tick from './components/NextTick_use'
import Name from './components/Name'
export default {
  data(){
    return {
      show: true
    }
  },
  components: {
    Life,  
    UseAxios,
    Ref,
    Tick,
    [Name.name]: Name // 对象里的key是变量的话[]属性名表达式
    // "ComNameHaHa": Com
  }
}
</script>

<style>

</style>