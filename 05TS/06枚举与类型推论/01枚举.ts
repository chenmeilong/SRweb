//枚举会将这些数就算成常数
// enum FileAccess {
//     // constant members
//     None,
//     Read    = 1 << 1,
//     Write   = 1 << 2,
//     ReadWrite  = Read | Write,
//     // computed member
//     G = "123".length
// }


enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"

//编译生产
// var Enum;
// (function (Enum) {
//     Enum[Enum["A"] = 0] = "A";
// })(Enum || (Enum = {}));
// var a = Enum.A;
// var nameOfA = Enum[a]; // "A"