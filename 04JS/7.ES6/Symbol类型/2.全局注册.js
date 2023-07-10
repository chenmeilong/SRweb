//同 Symbol() 一样接受一个参数作为符号描述，不同的是， Symbol.for() 在注册前会查询全局注册表中是否存在该描述，不存在则创建，存在则返回该描述

let symbolC = Symbol.for('aaa')
let _symbolC = Symbol.for('aaa')
console.log(symbolC === _symbolC) // true
console.log(Symbol.keyFor(symbolC))   // 访问全局注册表，返回对应的键值// 石头山