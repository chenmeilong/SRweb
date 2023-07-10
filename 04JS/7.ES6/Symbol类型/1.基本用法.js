//Symbol() 是在 ES6 中提出来的一个新的基础类型，它主要用来定义一个唯一的属性值，
//防止重复命名，再对象中有着重要的作用

let symbol = Symbol()  // symbol

console.log(typeof symbol) // symbol 类型
let symbolA = Symbol('foo')
let symbolB = Symbol('foo')
console.log('symbolA:' , symbolA, 'symbolB:',symbolB) 
//symbolA: Symbol(foo) symbolB: Symbol(foo)

console.log('symbolA == symbolB',symbolA == symbolB) 
//symbolA == symbolB false