<template>
  <div>{{num}}</div>
</template>

<script>
import {ref} from 'vue'
export default {
  async setup(){
    let num = ref(0)
    let p = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({sum})
      },3000)
    })
    return  await p
  }
}
</script>

<style>

</style>