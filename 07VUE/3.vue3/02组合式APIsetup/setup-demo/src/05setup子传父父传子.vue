<template>
	<Demo @hello="showHelloMsg" msg="hi" school="哈工程">
		<template v-slot:qwe>
			<span>尚硅谷</span>
		</template>
		<template v-slot:asd>
			<span>尚硅谷</span>
		</template>
	</Demo>
</template>

<script>
	import Demo from './components/Demo'
	export default {
		name: 'App',
		components:{Demo},
		setup(){
			function showHelloMsg(value){
				alert(`你触发了hello事件，参数:${value}！`)
			}
			return {
				showHelloMsg
			}
		}
	}
</script>

