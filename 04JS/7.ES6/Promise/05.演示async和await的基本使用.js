import thenFs from 'then-fs'
//注意 ABCD执行顺序 因为第一个await之前的代码会同步执行，await之后的代码会异步执行
console.log('A')
//注意使用await 则function**必须**被async修饰
async function getAllFile() {
  console.log('B')
  //这里加上await 返回的就是读取到的内容，不加await就是promise对象
  const r1 = await thenFs.readFile('./files/1.txt', 'utf8')
  console.log(r1)
  const r2 = await thenFs.readFile('./files/2.txt', 'utf8')
  console.log(r2)
  const r3 = await thenFs.readFile('./files/3.txt', 'utf8')
  console.log(r3)
  console.log('D')
}
getAllFile()
console.log('C')
