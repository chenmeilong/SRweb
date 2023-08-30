
//布尔型
let isDone: boolean = false;
//数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
//字符串
let myName: string = "bob"
//数组
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
//元组
let x: [string, number];
x = ['hello', 10]; // OK  访问// x[0] 
//枚举
enum Color {Red, Green, Blue} //默认情况下，从0   开始为元素编号 
let c: Color = Color.Green; 
//any: 
let notSure: any = 4; 
notSure = "maybe a string instead"; 
notSure = false; // okay, definitely a boolean 

//类型断言
let someValue: any = 12;
let strLength1: number = (<string>someValue).length;  //尖括号语法
let strLength2: number = (someValue as string).length; //方式二：as语法
//两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有as语法断言是被允许的。

//函数默认值
function keepWholeObject(wholeObject: { a: string, b?: number }) {  //？代表可有可无
    let { a, b = 1001 } = wholeObject;
}
//函数声明
type C = { a: string, b?: number }
function f({ a, b }: C): void {
    // ...
}
//函数声明+默认值
function func({ a, b = 0 } = { a: "" }): void {
    // ...
}
func({ a: "yes" }); // ok, default b = 0
func(); // ok, default to {a: ""}, which then defaults b = 0
// func({}); // error, 'a' is required if you supply an argument

console.log('##');
