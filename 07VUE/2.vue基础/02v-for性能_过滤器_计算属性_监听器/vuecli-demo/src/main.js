import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
//这里定义全局过滤器，在全局的.vue文件可直接使用
//语法：Vue.filter("过滤器名",值 => 处理结果)
// Vue.filter("reverse", val=>val.split("").reverse().join(""))
Vue.filter("reverse", (val,s)=>val.split("").reverse().join(s))

Vue.config.productionTip = false
console.log(App);
new Vue({
  render: h => h(App),
}).$mount('#app')
