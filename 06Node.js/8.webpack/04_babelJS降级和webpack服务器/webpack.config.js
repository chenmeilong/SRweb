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
        {
            test: /\.less$/i,
            use: [
                'style-loader',
                'css-loader',
                'less-loader',
            ],
        },
        { //针对于webpack5的 图片文件配置
            test: /\.(gif|png|jpg|jpeg)$/i,
            type: 'asset'  //匹配上面的文件后，webpack会把他们当做静态资源处理打包
            //如果设置的是asset模块
            //以8kb大小区分图片文件
            //小于8kb的，把图片转base64，打包进入js中
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            type: 'asset/resource', //所有字体图标文件，都输出的dist下
            generator:{ //生成文件名字 定义规则
                filename: 'fonts/[name].[hash:6][ext]'  //[ext]会替换成.eot/.woff
            },
        },

        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/, //不匹配这些文件夹下的文件 比如下了个高版本的jquery再去降级就没有意义
            use: {
            loader: 'babel-loader', //使用这个loader处理js文件
            options: {   //加载器选项
                presets: ['@babel/preset-env']
                //照这里降级JS语法
            }
            }
        },
    ],
    }, 
};