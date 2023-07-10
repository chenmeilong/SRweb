import Vue from 'vue'  //引入vue对象  类似<script src="vue.js"></script>
import App from './App.vue'  //引入app.vue文件里对象引入过来（vue项目页面入口）


Vue.config.productionTip = false     //在控制台有一句提示消息

let a = 10  //声明变量未使用clint会报错    但可以在vue.config.js中配置让代码不报错

new Vue({   //开始实例化vue
  render: h => h(App),   //准备渲染App页面
}).$mount('#app')         //渲染到index.html的id为 app的标签上
