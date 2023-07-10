import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store'
import '@/api/mock'
import Cookie from 'js-cookie'
import 'default-passive-events'  //Chrome51 版本以后，Chrome 增加了新的事件捕获机制－Passive Event Listeners，导致触发了告警。 解决这个问题

Vue.use(ElementUI);  //全局引入

Vue.config.productionTip = false

//添加全局前置导航守卫
router.beforeEach((to,from,next)=>{
  //判断token存在不存在
  const token = Cookie.get('token')
  if(!token && to.name!=='login'){
    next({name:'login'})
  }else if (token && to.name === 'login'){  //token存在，说明用户登录，此时跳转到首页
    next({name: 'home'})
  }else{
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)   //data和methods初始化之后
  }
}).$mount('#app')
