import thenFs from 'then-fs'

//promise顺序读取  catch异常捕获
//如果不希望前面的错误导致后续的.then无法正常执行，则可以将。catch调用提前
thenFs.readFile('./files/11.txt', 'utf8')
  .catch((err) => {
    console.log(err.message)
  })
  .then((r1) => {
    console.log(r1)
    return thenFs.readFile('./files/2.txt', 'utf8')
  })
  .then((r2) => {
    console.log(r2) 
    return thenFs.readFile('./files/3.txt', 'utf8')
  })
  .then((r3) => {
    console.log(r3)  //读取的到的内容
  })
