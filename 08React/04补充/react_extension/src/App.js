import React, { Component,Fragment } from 'react'
// import Demo from './components/1_setState/index'
// import Demo from './components/4_Fragment/index'
// import Demo from './components/5_Context/index'
// import Demo from './components/6_optimize/index'
// import Demo from './components/7_renderProps/index'
// import Demo from './components/8_ErrorBoundary/Parent'

// 高阶组件
import Demo from './components/9_HOC/index'

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<Demo />
			</Fragment>
		)
	}
}
