interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): void {
    // ...
}
// let mySquare = createSquare({ colour: "red", width: 100 });  这行报错


// TS自带还有属性检查功能，对象字面量会被特殊对待而且会经过额外属性检查，当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
// 因为TS太智能导致的问题

// 解决办法
//1使用断言
// let mySquare = createSquare({ colour: "red", width: 0.5 } as SquareConfig);

//2最佳解决办法 字符串索引签名
// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
// }

// 3.卡bug  因为squareOptions不会经过额外属性检查，所以编译器不会报错
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);