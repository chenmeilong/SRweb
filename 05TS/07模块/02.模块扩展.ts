
// observable.ts stays the same
// map.ts
import { Observable } from "./observable";
declare module "./observable" {
    interface Observable<T> {
        map<U>(f: (x: T) => U): Observable<U>;
    }
}
// @ts-ignore  //忽略本行错误
Observable.prototype.map = function (f) {
    // ... another exercise for the reader
}


// consumer.ts
// import { Observable } from "./observable";
// import "./map";
// let o: Observable<number>;
// o.map(x => x.toFixed());