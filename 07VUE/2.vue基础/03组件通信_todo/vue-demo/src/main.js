import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局注册组件名字
import Pannel from './components/Pannel_1'
Vue.component("Pannel",Pannel)

new Vue({
  render: h => h(App),
}).$mount('#app')
