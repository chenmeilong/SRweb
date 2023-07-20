import path from 'path'
import { defineConfig } from 'vite'
// TS开发中强制检查错误
import checker from "vite-plugin-checker"
// gzip压缩
// import viteCompression from 'vite-plugin-compression';
// CDN加速
import importToCDN from 'vite-plugin-cdn-import'
// 类型定义去掉才能打包成功 可能是CDN和Vite还不兼容
// export default defineConfig({
export default ({
    // 打包不压缩，有利于学习
    "build":{
        "minify":false,
        // 分包
        "rollupOptions":{
            "output":{
                "manualChunks":(id:string)=>{
                    // TS默认为ES5,需要手动去tsconfig.json配置
                    if(id.includes("node_modules")){
                        return "vendor"
                    }
                }
            }
        }
    },
    plugins:[
        checker({typescript:true}),
        // viteCompression(),
        importToCDN({
            modules: [
                {
                    name: 'lodash',
                    // 全局变量如Jquery的$
                    var: '_',
                    path: `https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js`
                },
            ],
        }),
    ],
    resolve: {
    // 配置别名
    alias: { '@': path.resolve(__dirname, './src') }
    },
    //打包路径变为相对路径,用liveServer打开,便于本地测试打包后的文件
    base: './'
})
