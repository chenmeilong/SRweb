
//定义了StringArray接口，它具有索引签名。 这个索引签名表示了当用number去索引StringArray时会得到string类型的返回值。
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

// 共有支持两种索引签名：字符串和数字.可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。

//只读数组
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let array: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!