// 虽然说函数会等待 await 返回结果在继续执行，但是 await 内部的代码也依然按正常的同步和异步执行，例如

async function fn() {
    console.log(0);
    setTimeout(() => {
        console.log(1);
    }, 0);
    await new Promise(resolve => {
        setTimeout(() => {
            console.log(2);
        }, 0);
        console.log(3);
        setTimeout(() => {
            console.log(4);
            resolve();
        }, 1000);
        setTimeout(() => {
            console.log(5);
        }, 0);
    });
    setTimeout(() => {
        console.log(6);
    }, 0);
    console.log(7);
}
fn();
// 0
// 3
// 1
// 2
// 5
// 4（2 秒后）
// 7
// 6