
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
/* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
root.render(
  <React.StrictMode>
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
  </React.StrictMode>
);
