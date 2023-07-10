// window.onmousedown = function(mouseEvent) {
//     console.log(mouseEvent.button);  //<- Error
// };
//TypeScript类型检查器使用Window.onmousedown函数的类型来推断右边函数表达式的类型。 

//因此，就能推断出mouseEvent参数的类型了。 如果函数表达式不是在上下文类型的位置，
//mouseEvent参数的类型需要指定为any，这样也不会报错了

window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.button);  //<- Now, no error is given
};