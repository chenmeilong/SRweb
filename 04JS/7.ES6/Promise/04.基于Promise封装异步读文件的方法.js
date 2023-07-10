import fs from 'fs'

function getFile(fpath) {
  //resolve, 形参，调用getFiles()方法时，通过.then指定的成功回调函数
  // reject形参，调用getFiles()方法时，通过.then指定的失败回调函数
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
      if (err) return reject(err)
      resolve(dataStr)
    })
  }) 
} 

getFile('./files/11.txt')
//.then(成功的回调函数（这个函数传参给上面的resolve），失败的回调函数（这个函数传参给上面的reject）)  当前只有一个表示只有成功的回调函数
.then((r1) => {console.log(r1)}, (err) => {console.log(err.messages)})
//会捕获的前面执行的错误  一般是和前面的错误回调功能相同
// .catch((err) => console.log(err.message))
