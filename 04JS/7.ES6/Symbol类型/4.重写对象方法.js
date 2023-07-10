//Symbol重写对象方法
// 重写 instanceof
class fun{
    static [Symbol.hasInstance](){
        return false
    }
}
let fA = new fun()
console.log(fA instanceof fun)  // false  由于我们重写，始终返回 false

// 重写  String.replace()
let name_S = ' my name is '
console.log('重写前',name_S.replace(/name/,'Jock')) // my  Jock is
RegExp.prototype[Symbol.replace] = function (){
    return '石头山'
}
console.log('重写后',name_S.replace(/name/,'shikai')) // 石头山  由于我们重写，所以只返回石头山