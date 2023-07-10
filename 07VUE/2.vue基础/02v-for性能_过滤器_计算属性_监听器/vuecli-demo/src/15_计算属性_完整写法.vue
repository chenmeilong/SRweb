<template>
  <div>
      <div>
          <span>姓名:</span>
          <input type="text" v-model="full">
      </div>
  </div>
</template>

<script>
// 问题: 给计算属性赋值 - 需要setter
// 解决:
/*
    完整语法:
    computed: {
        "计算属性名" (){},
        "计算属性名": {
            set(值){

            },
            get(){
                return 值
            }
        }
    }
*/
export default {
    computed: {
        full: {
            // 给full赋值触发set方法
            set(val){
                console.log(val)
            },
            // 使用full的值触发get方法
            get(){
                return "无名氏"
            }
        }
    }
}
</script>

<style>

</style>