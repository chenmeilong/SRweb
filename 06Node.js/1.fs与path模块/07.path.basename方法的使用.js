const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

const fullName = path.basename(fpath)
console.log(fullName)

const nameWithoutExt = path.basename(fpath, '.html')  //获取文件名  
console.log(nameWithoutExt)
