<template>
  <div>
    <div>
      <span>用户名:</span>
      <!-- 1. v-model
         双向数据绑定
         value属性 - vue变量
       -->
      <input type="text" v-model="username">
    </div>
    <button @click='clcFn'>sasa</button>
  </div>
</template>

<script setup>
	import {ref} from 'vue'

	let username = ref('1212')
	function clcFn(){
		console.log('##');
		username.value = 'jack'
	}

</script>

