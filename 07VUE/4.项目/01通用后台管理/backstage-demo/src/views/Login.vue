<template>
    <el-form ref='form' class="login-container" :inline="true" :model="form" :rules="rules" label-width="70px">
        <h3 class="login_title">系统登录</h3>

        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"  placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submit" style="margin-left:105px;margin-top:10px">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
// 使用mock生成模拟数据
import Mock from 'mockjs'
import Cookie from 'js-cookie'
import {getMenu} from '@/api'
export default {
    data(){
        return{
            form:{
                username:'',
                password:'',
            },
            rules:{
                username:[{required:true,trigger:'blur',message:'请输入用户名'}],
                password:[{required:true,trigger:'blur',message:'请输入密码'}],
            }
        }
    },
    methods:{
        submit(){
            // //token 信息
            // const token = Mock.Random.guid() //得到一段随机数
            // //token 信息存入cookie用于不同页面的通信
            // Cookie.set('token',token)
            // this.$router.push('/home')

            this.$refs.form.validate((valid)=>{
                if(valid){
                    // console.log(this.)
                    getMenu(this.form).then(({data})=>{
                        console.log(data)
                        if (data.code === 20000){
                            Cookie.set('token',data.data.token)
                            //获取菜单数据，存入store中
                            this.$store.commit('setMenu', data.data.menu)
                            //设置动态路由
                            this.$store.commit('addMenu',this.$router)

                            this.$router.push('/home')  //页面跳转
                        }else{
                            this.$message.error(data.data.message);
                        }
                    })
                }
            })         //form表单的校检方法

        }
    }
}
</script>
<style lang="less" scoped>
.login-container{
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    width: 350px;
    border:1px solid #eaeaea;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
    box-sizing: border-box;
    .login_title{
        text-align: center;
        margin-bottom: 40px;
        color: #505458;
    }

    .el-input{
        width: 198px;
    }
}
</style>