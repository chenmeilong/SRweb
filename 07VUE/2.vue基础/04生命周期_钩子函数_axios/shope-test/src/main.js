import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false
import axios from 'axios'
axios.defaults.baseURL = "https://www.escook.cn"
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
