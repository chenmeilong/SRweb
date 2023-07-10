import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

export default class App extends Component {
	render() {
		return (
			<div>
				<div>
					{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
					<Link className="list-group-item" to="/about">About</Link>-----
					<Link className="list-group-item" to="/home">Home</Link>
				</div>
				<div>
					{/* 注册路由 */}
					<Route path="/about" component={About}/>
					<Route path="/home" component={Home}/>
				</div>
			</div>
		)
	}
}
