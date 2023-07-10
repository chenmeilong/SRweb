


import thenFs from 'then-fs'

const promiseArr = [
  thenFs.readFile('./files/3.txt', 'utf8'),
  thenFs.readFile('./files/2.txt', 'utf8'),
  thenFs.readFile('./files/1.txt', 'utf8'),
]
//Promise.all()方法会发起并行的promise异步操作，等所有的异步操作全部结束后才会执行下一步的.then操作(等待机制)
Promise.all(promiseArr).then(result => {
  console.log(result)
})   
console.log('###')
//Promise的.race()方法会发起并行的promise的异步操作，只要任何一个异步操作完成，就立即执行下一步的.then操作（赛跑机制）
Promise.race(promiseArr).then(result => {
  console.log(result)
})   