import {fromEvent, Observable} from 'rxjs'
import {take} from 'rxjs/operators';


class SimpleDemo {
    /*第一个简单的例子*/
    static main() {
        const eleBtn: HTMLElement = document.querySelector('#btn');
        const click$: Observable<any> = fromEvent(eleBtn, 'click');
        click$.pipe(
            take(1)
        ).subscribe(e => {
            console.log(e);
            console.log('只能执行一次');
        })
    }


    /*Observable*/
    static observableDemo() {
        const source$ = new Observable(observe => {
            observe.next(1);
            observe.next(2);
            observe.next(3);
        });

        const observe = {
            next: item => console.log(item * 2)
        };

        console.log('start');
        source$.subscribe(observe);
        console.log('end');
    }

    /*async*/
    static asyncDemo () {
        /*const source$ = new Observable(observer => {
            let number = 1;
            setInterval(() => {
                observer.next(number++)
            }, 1000)
        });
        const observer = {
            next: item => console.log(item)
        };
        console.log('start');
        source$.subscribe(observer);
        console.log('end');*/
        const source$ = new Observable(observe => {
            let number = 1;
            setInterval(()=> {
                observe.next(number++)
            }, 1000)
        });
        const observer = {
            next: item => console.log(item)
        };
        console.log('start');
        source$.subscribe(observer);
        console.log('end');
    }

}

export default SimpleDemo;
