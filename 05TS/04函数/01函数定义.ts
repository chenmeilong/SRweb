// 简写  编译器会自动完成类型推断  返回值类型是函数类型的必要部分，没有返回值也要写void
let myAdd = function(x: number, y: number) { return x + y; };
// function add(x: number, y: number): number {
//     return x + y;
// }

// 类型推断出完整写法
// let myAdd: (baseValue: number, increment: number) => number = function(x, y) { return x + y; };
