<template>
  <div>
    <ul>
      <li v-for="(val, ind) in arr" :key="ind">
        {{ val }}
      </li>
    </ul>
    <button @click="btn">下标1位置插入新来的</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      arr: ['老大', "老二", '老三']
    }
  },
  methods: {
    btn(){
      this.arr.splice(1, 0, '新来的')
    }
  }
}
</script>

<style>

</style>