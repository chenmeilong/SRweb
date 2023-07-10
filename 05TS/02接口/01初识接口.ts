function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);


//我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
interface LabelledValue {
    label: string;
}
function printLabel2(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
  
  let myObj2 = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);