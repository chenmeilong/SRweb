

// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length);  // Error: T doesn't have .length  泛型约束就是解决这种问题
//     return arg;
// }


interface Lengthwise {
    length: number;
}
//创建一个包含.length属性的接口，使用这个接口和extends关键字还实现约束：
function loggingIdentity3<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

// 现在这个泛型函数被定义了约束，因此它不再是适用于任意类型
// loggingIdentity3(3);
loggingIdentity3({length: 10, value:15}); //length为必须属性


