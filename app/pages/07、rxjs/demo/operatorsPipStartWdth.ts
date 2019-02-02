import {fromEvent, from} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';

const source$ = fromEvent(document.querySelector('#btn'), 'click');
let number = 0;
const fakeRequest = x => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number++)
        }, 1000)
    })
};

source$.pipe(
    startWith('initData'),
    switchMap(x => {
        console.log(x); // initData`
        return from(fakeRequest(x))
    })
).subscribe((x: string) => document.querySelector('#number').textContent = x);
