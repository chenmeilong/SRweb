import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 完全引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

//手动 引入

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//vue3.0重构中 未完成待续...
//https://www.bilibili.com/video/BV1QU4y1E7qo?p=64&spm_id_from=pageDriver&vd_source=33eb349d9ed692db6246299d23c6dbce

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
// app.use(ElementPlus)   //全部使用时间使用
app.mount('#app')