<template>
	<h2>当前求和为：{{sum}}</h2>
	<button @click="sum++">点我+1</button>
	<hr>
	<h2>当前的信息为：{{msg}}</h2>
	<button @click="msg+='！'">修改信息</button>
	<hr>
	<h2>姓名：{{person.name}}</h2>
	<h2>年龄：{{person.age}}</h2>
	<h2>薪资：{{person.job.j1.salary}}K</h2>
	<button @click="person.name+='~'">修改姓名</button>
	<button @click="person.age++">增长年龄</button>
	<button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
	import {ref,reactive,watch} from 'vue'
	export default {
		name: 'App',
		setup(){
			//数据
			let sum = ref(0)
			let msg = ref('你好啊')
			let person = reactive({
				name:'张三',
				age:18,
				job:{
					j1:{
						salary:20
					}
				}
			})
			console.log(person)
			watch(sum,(newValue,oldValue)=>{
				console.log('sum的值变化了',newValue,oldValue)
			})

			//ref监听对象监听不到数据改变的解决办法
			//法一 deep:true 因为ref会把对象数据自动转换成reactive对象使用proxy
			// watch(person,(newValue,oldValue)=>{
			// 	console.log('person的值变化了',newValue,oldValue)
			// },{deep:true})
			//法二 person.value是一个reactive对象
			// watch(person.value,(newValue,oldValue)=>{
			// 	console.log('person的值变化了',newValue,oldValue)
			// },)

      // reactive
			// watch(person,(newValue,oldValue)=>{
			// 	console.log('person的值变化了',newValue,oldValue)
			// },{deep:false})


			//返回一个对象（常用）
			return {
				sum,
				msg,
				person
			}
		}
	}
</script>

