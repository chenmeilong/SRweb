//修改打包输入输出路径 需要添加这个文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mymain.js',
    },
    plugins: [new HtmlWebpackPlugin({  //plugins插件配置
        template:'./public/index.html'  //告诉webpack使用插件，使用的html模板
    })],
    module: {   //加载器配置
        rules: [  //规则
        {   //一个具体的规则对象
        test: /\.css$/i,  //正则 \.是转义  i是忽略大小写
        use: ["style-loader", "css-loader"],  //让webpack使用这个2个loader处理css文件
        //从右到左 不能颠倒  先打包到css 再将css插入到DOM上
        },
    ],
    },
};