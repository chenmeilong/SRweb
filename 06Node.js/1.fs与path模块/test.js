var F=function(){};  
Object.prototype.a=function(){console.log('A');};
Function.prototype.b=function(){console.log('B');};
var f=new F();
//f能访问到a、b吗？