//创建“外壳”组件App
import React,{Component} from 'react'  //{Component}不是解构赋值，而是react文件使用了多种暴露方式 既能使用React.Component上和 export Class Component
import Hello from './components/Hello'
import Welcome from './components/Welcome'

//创建并暴露App组件
export default class App extends Component{
	render(){
		return (
			<div>
				<Hello/>
				<Welcome/>
			</div>
		)
	}
}
