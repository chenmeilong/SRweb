// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。
//函数的返回值类型是通过其返回值推断出来的,返回值类型不对也会报错

interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
//mySearch = function(src: string, sub: string): boolean {   //尽管变量名字不一样也可以
mySearch = function(source: string, subString: string): boolean {  //
  let result = source.search(subString);
  return result > -1;
}