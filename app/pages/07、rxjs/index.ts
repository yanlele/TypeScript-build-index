import {Observable} from 'rxjs';

const source$ = new Observable(observer => {
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
}, 5000);
