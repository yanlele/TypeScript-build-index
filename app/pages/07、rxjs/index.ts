import {interval, Observable} from 'rxjs';
import {map} from "rxjs/operators";

/*const source$ = new Observable(observer => {
    let number = 1;
    setInterval(() => {
        observer.next(number++)
    }, 1000)
});
const observer = {
    next: item => console.log(item)
};
const subscription = source$.subscribe(observer);

setTimeout(() => {
    subscription.unsubscribe()
}, 5000);*/

const source$ = interval(1000).pipe(
    map(x => x * x)
);
source$.subscribe(x => console.log(x));
