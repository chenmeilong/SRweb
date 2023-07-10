import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局指令 - 到处"直接"使用
Vue.directive("gfocus", {
  inserted(el) {
    el.focus() // 触发标签的事件方法
  }
})

// 目标: 自定义指令传值
Vue.directive('color', {
  inserted(el, binding) {
    el.style.color = binding.value   //第一次插入到网页会执行
  },
  update(el, binding) { //自定义指令的值发生变化会触发update方法
    el.style.color = binding.value
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
