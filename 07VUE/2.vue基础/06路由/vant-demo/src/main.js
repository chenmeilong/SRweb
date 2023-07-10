import Vue from 'vue'
import App from './App.vue'
// 方式3: 引入所有vant组件
// import Vant from 'vant';
// import 'vant/lib/index.css'; // 引入vant所有组件样式
// Vue.use(Vant); // 全局注册vant所有组件

// 方式1: 全局 - 自动按需引入vant组件
// (1): 下载 babel-plugin-import
// (2): babel.config.js - 添加官网说的配置 (一定要重启服务器)
// (3): main.js 按需引入某个组件, Vue.use全局注册 - 某个.vue文件中直接使用vant组件
import { Button, Form, Field  } from 'vant';
Vue.use(Button) // Button组件全局注册, 真正注册的组件名VanButton
Vue.use(Form);
Vue.use(Field);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
