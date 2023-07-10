
<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">左侧菜单</el-aside>
            <el-container>
                <common-header/>
                <!-- <el-header>头部菜单</el-header> -->
                <el-main>        
                    这个部分是变化的
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CommonHeader from "../components/CommonHeader.vue";

export default defineComponent({
    components:{
        CommonHeader,
    }
});
</script>