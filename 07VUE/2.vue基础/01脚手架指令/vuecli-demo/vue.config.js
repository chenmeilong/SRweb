const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint 代码检查
  devServer:{
    port: 3000,
    open: true,
  }

})
