//布尔型
var isDone = false;
//数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
//字符串
var myName = "bob";
//数组
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//元组
var x;
x = ['hello', 10]; // OK  访问// x[0]
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //默认情况下，从0   开始为元素编号 
var c = Color.Green;
//any: 
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean 
//类型断言
var someValue = 12;
var strLength1 = someValue.length; //尖括号语法
var strLength2 = someValue.length; //方式二：as语法
//两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有as语法断言是被允许的。
//函数默认值
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
function f(_a) {
    var a = _a.a, b = _a.b;
    // ...
}
//函数声明+默认值
function func(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
func({ a: "yes" }); // ok, default b = 0
func(); // ok, default to {a: ""}, which then defaults b = 0
// func({}); // error, 'a' is required if you supply an argument
