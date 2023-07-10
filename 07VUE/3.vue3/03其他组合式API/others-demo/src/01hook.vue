<template>
	<h2>当前点击时鼠标的坐标为：x：{{point.x}}，y：{{point.y}}</h2>
</template>

<script>
  //可以是多个组件调用
	import usePoint from './hooks/usePoint'
	export default {
		name:'App',
		setup(){
			const point = usePoint()
			return {point}
		}
	}
</script>
