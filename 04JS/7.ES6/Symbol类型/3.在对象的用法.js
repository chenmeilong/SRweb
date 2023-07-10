//法一直接定义
let name1 = Symbol('author')
const obj = { }
obj[name1] = '石头山'

//法二 使用 Object.defineProperty()
Object.defineProperty(obj,name1,{
    value:'石头山'
})