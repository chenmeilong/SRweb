//1. yarn add jquery
//2. public/index.html -10个li
//3. 入口处引用jquery

////////使用html-webpack-plugin（html一起打包程序）
//4. yarn add  html-webpack-plugin -D
//5. 修改配置文件webpack.config.js


////////打包css
//6. yarn add css-loader style-loader -D
//5. 修改配置文件webpack.config.js
//注意： css文件会一起打包的js中


import $ from 'jquery'

//odd 奇数
$("#myUL>li:odd").css('color', 'red')
$("#myUL>li:even").css('color', 'green')

//直接导入css  注意还需要 loader
import "./index.css"