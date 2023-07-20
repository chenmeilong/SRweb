//修改打包输入输出路径 需要添加这个文件
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mymain.js',
    },
};