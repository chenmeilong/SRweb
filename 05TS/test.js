function asyncTask() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
        resolve();
        }, 1000);
        return '##'
    });
}

asyncTask()
.then(result => {
    console.log(result); // 输出 'Async task completed'
})

  