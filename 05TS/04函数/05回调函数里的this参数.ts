// //这样写是错误的写法  这样写回调函数会崩掉
// class Handler {
//     info: string;
//     onClickBad(this: Handler, e: Event) {
//         // oops, used this here. using this callback would crash at runtime
//         this.info = e.message;
//     }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickBad); // error!

// //解决办法1
// class Handler {
//     info: string;
//     onClickGood(this: void, e: Event) {
//         // can't use this here because it's of type void!
//         console.log('clicked!');
//     }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickGood);
// //因为onClickGood指定了this类型为void，因此传递addClickListener是合法的。 
// //当然了，这也意味着不能使用this.info. 如果你两者都想要，你不得不使用箭头函数了：

// //解决办法2
// class Handler {
//     info: string;
//     onClickGood = (e: Event) => { this.info = e.message }
// }