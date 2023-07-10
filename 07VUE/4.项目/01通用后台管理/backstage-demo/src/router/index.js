
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main'
import Home from '@/views/Home'
import User from '@/views/User'
import Mall from '@/views/Mall'
import PageOne from '@/views/PageOne'
import PageTwo from '@/views/PageTwo'
import Login from '@/views/Login'

Vue.use(VueRouter) //注册全局组件

const routes = [
    {
        path:'/',
        component:Main,
        name:'Main', //动态添加路由需要名字
        redirect:'/home',
        children:[
            // {path:'home',name:'home',component:Home,}, //首页
            // {path:'user',name:'user',component:User,},//用户管理
            // {path:'mall',name:'mall',component:Mall,},//商品管理
            // {path:'page1',name:'page1',component:PageOne,},//页面1
            // {path:'page2',name:'page2',component:PageTwo,},//页面2
        ],
    },
    {
        path:'/login',
        name:'login',
        component: Login,
    },

]

export default new VueRouter({
    routes,
})

