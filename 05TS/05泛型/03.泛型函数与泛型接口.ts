

function identity2<T>(arg: T): T {
    return arg;
}

let myIdentity1: <U>(arg: U) => U = identity2;  // 可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以

let myIdentity2: {<T>(arg: T): T} = identity2;   //使用带有调用签名的对象字面量来定义泛型函数

//泛型接口
interface GenericIdentityFn {
    <T>(arg: T): T;
}
let myIdentity3: GenericIdentityFn = identity2;


//泛型接口的另一种形式  不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分。
interface GenericIdentityFn2<T> {
    (arg: T): T;
}
let myIdentity4: GenericIdentityFn2<number> = identity2;