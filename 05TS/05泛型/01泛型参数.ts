// function identity(arg: number): number {
//     return arg;
// }
//使返回值的类型与传入参数的类型是相同的与上面等价    这个参数叫泛型类型
function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: <T>(arg: T) => T = identity;

//identity函数叫做泛型

//使用泛型
//第一种是，传入所有的参数，包含类型参数
let output = identity<string>("myString");  // type of output will be 'string'
//第二种方法更普遍。利用了类型推论 – 即编译器会根据传入的参数自动地帮助我们确定T的类型
let output2 = identity("myString");  // type of output will be 'string'


