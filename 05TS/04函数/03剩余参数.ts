// 在TypeScript里，你可以把所有参数收集到一个变量里,剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。
function buildName5(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }
  
  let employeeName = buildName5("Joseph", "Samuel", "Lucas", "MacKinzie");