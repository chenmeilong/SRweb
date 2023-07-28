 function fn() {
    console.log(0);
    setTimeout(() => {
        console.log(1);
    }, 0);
    async function a() {      //前面加个await  结果就 不也一样了0213564
        console.log(2);
    
        setTimeout(() => {
            console.log(3);
        }, 0);
        await new Promise(res => setTimeout(res, 1000))
        setTimeout(() => {
            console.log(4);
        }, 1000);
        console.log(5);
    }
    a()
    console.log(6)
}
 
fn();
// 0
// 2
// 6
// 1
// 3
// 5（1 秒后）
// 4（再等 1 秒后）

//也许会疑惑，不是说 async 函数会等到 await 返回结果后再继续执行吗，为何就先输出 6 了？其实不要混淆概念，
// 确实 async 函数内部是这样干的（3 后 1秒输出 5、4），但 async 函数它自身执行时依然是正常的同步任务执行，
// 也就是虽然内部的 async 函数会等待其 await 返回结果才继续执行后面的代码，但外部的 async 函数可不会等待内部的那个 await，会照常执行