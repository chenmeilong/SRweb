import thenFs from 'then-fs'
//需要安装 then-fs这个包  记得 npm init -y  给添加type：module

//这种写法是一种异步读取文件 不是顺序读取   then 有成功执行的程序，有失败执行的程序（可省略）
thenFs.readFile('./files/1.txt', 'utf8').then((r1) => {console.log(r1)})
thenFs.readFile('./files/2.txt', 'utf8').then((r2) => {console.log(r2)})
thenFs.readFile('./files/3.txt', 'utf8').then((r3) => {console.log(r3)}) 

// import path from 'path'
// console.log(path.join(__dirname, './files/1.txt'))

