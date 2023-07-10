
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
        resolve();
        console.log(4);
 
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
// 4
// 7
// 1
// 2
// 5
// 6

//由于同步任务 先于 异步任务执行的机理，在同步任务执行过程中依次输出了 0、3 后，就立即执行了 resolve() 使得 await 得到了返回结果，
//再往后就继续同步的输出了 4，但是输出 5 的代码是异步任务，与输出 1、2 的代码一并放入任务队列，此时由于 await 返回了结果，
//所以可以执行 await 以外的代码了，输出 6 是异步任务，于是先输出了同步任务的 7，同步任务都执行完了，最后执行任务队列中的异步任务，
//按之前进入队列的顺序，就是依次输出 1、2、5、6，所有代码运行结束；