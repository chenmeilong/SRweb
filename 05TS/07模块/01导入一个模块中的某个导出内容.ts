import { ZipCodeValidator } from "./ZipCodeValidator";

let myValidator = new ZipCodeValidator();

// import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";  //重命名
// let myValidator = new ZCV();

//将整个模块导入到一个变量，并通过它来访问模块的导出部分
// import * as validator from "./ZipCodeValidator";
// let myValidator = new validator.ZipCodeValidator();

//默认导入
import validator from "./ZipCodeValidator";
let myValidator2 = new validator();