<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>{{isCollapse ? '后台':'手机销售后台管理系统'}}</h3>
    <el-menu-item @click='clickMenu(obj)' v-for='obj in noChildren' :key='obj.name' :index="obj.name">
      <i :class="`el-icon-${obj.icon}`"></i>
      <span slot="title">{{obj.label}}</span>
    </el-menu-item>


    <el-submenu v-for='item in hasChildren' :key='item.label' :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item @click='clickMenu(obj)' v-for="obj in item.children" :key='obj.name' :index="obj.name">{{obj.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import Cookie from "js-cookie"
export default {
  data() {
    return {
      // menuData: [
      //   {
      //     path: "/",
      //     name: "home",
      //     label: "首页",
      //     icon: "s-home",
      //     url: "Home/Home",
      //   },
      //   {
      //     path: "/mall",
      //     name: "mall",
      //     label: "商品管理",
      //     icon: "video-play",
      //     url: "MallManage/MallManage",
      //   },
      //   {
      //     path: "/user",
      //     name: "user",
      //     label: "用户管理",
      //     icon: "user",
      //     url: "UserManage/UserManage",
      //   },
      //   {
      //     label: "其他",
      //     icon: "location",
      //     children: [
      //       {
      //         path: "/page1",
      //         name: "page1",
      //         label: "页面1",
      //         icon: "setting",
      //         url: "Other/PageOne",
      //       },
      //       {
      //         path: "/page2",
      //         name: "page2",
      //         label: "页面2",
      //         icon: "setting",
      //         url: "Other/PageTwo",
      //       },
      //     ],
      //   },
      // ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(obj){
      if(this.$route.path!==obj.path && !(this.$route.path==='/home' && obj.path==='/')){
        this.$router.push({path:obj.path})
      }
      this.$store.commit('selectMenu',obj)
    },
  },
  computed:{
    //计算无子菜单
    noChildren(){
      return this.menuData.filter(item=>!item.children)
    },
    //计算有子菜单
    hasChildren(){
      return this.menuData.filter(item=>item.children)
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    },
    menuData(){
      //判断当前数据，如果缓存中没有，当前store中去获取
      return JSON.parse(Cookie.get('menu')) || this.$store.state.tab.menu   //有点不明白
    }, 
  },
};
</script>

<style lang='less' scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height:100vh;
  border-right:none;
  h3 {
    color:#fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
