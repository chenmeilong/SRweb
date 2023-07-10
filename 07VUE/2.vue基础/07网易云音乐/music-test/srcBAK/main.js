import Vue from 'vue'
import App from './App.vue'
import '@/mobile/flexible'
import '@/styles/reset.css'

import router from '@/router'

import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);

Vue.config.productionTip = false


import {recommendMusicAPI} from '@/api'
async function fn(){
  const res = await recommendMusicAPI() // api方法原地会得到axios请求在原地的Promise对象(里面有一个ajax请求)
  console.log(res);
}
fn()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
