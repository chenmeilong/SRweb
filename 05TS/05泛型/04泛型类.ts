
//接口一样，直接把泛型类型放在类后面，可以帮助我们确认类的所有属性都在使用相同的类型
//泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };