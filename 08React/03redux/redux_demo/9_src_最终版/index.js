import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'  //自动分析组件，精准传入store

const root = ReactDOM.createRoot(document.getElementById('root'));
/* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
root.render(
  <React.StrictMode>
	<Provider store={store}>
		<App/>
	</Provider>,
  </React.StrictMode>
);
