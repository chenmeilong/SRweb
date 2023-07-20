//1. yarn add jquery
//2. public/index.html -10个li
//3. 入口处引用jquery

////////使用html-webpack-plugin（html一起打包程序）
//4. yarn add  html-webpack-plugin -D
//5. 修改配置文件webpack.config.js


////////打包css
//5. yarn add css-loader style-loader -D
//6. 修改配置文件webpack.config.js
//注意： css文件会一起打包的js中

//打包less
//7.yarn add less less-loader -D
//8. 修改配置文件webpack.config.js

//打包图片 
//9.在less中引用图片（这里是当背景）
//webpack 万物皆模块

import $ from 'jquery'

//odd 奇数
$("#myUL>li:odd").css('color', 'red')
$("#myUL>li:even").css('color', 'green')

//直接导入css  注意还需要 loader
import "./index.css"

import "./index.less"

//导入gif
//10.在下面import图片成一个对象 
import imgObj from './assets/1.gif'
let theimg =document.createElement("img")
theimg.src = imgObj
document.body.append(theimg)


//11.引入字体图标文件
import "./assets/fonts/iconfont.css"
let theI =document.createElement("i")
theI.className = "iconfont icon-qq"
document.body.append(theI)

//12.JS版本 babel降级
const fn = () =>{ console.log("我是箭头函数001")}
console.log(fn)   //带上小括号  就只有后面的那句话
