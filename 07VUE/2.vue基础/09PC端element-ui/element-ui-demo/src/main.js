import Vue from 'vue'
import App from './App.vue'

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

import { Button, Row,DatePicker } from 'element-ui';

Vue.component(Button.name, Button);  //Button.name 其实是el-button 也可以完全自己写
Vue.component(Row.name, Row); 
Vue.component(DatePicker.name, DatePicker); 
// 或写为
// Vue.use(Button)
// Vue.use(Row)
// Vue.use(DatePicker)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


