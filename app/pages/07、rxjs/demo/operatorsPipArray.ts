import {Observable} from 'rxjs';
import {filter, map, mapTo} from "rxjs/operators";

const source$ = new Observable(observer => {
    observer.next(2);
    observer.next(4);
    observer.next(8);
});

const observer = {
    next: item => console.log(item)
};

const subscription = source$
    .pipe(
        filter((x: number) => {
            return x === 2;
        }),
        map((x: number) => {
            return x * 2
        }),
        mapTo('Hi')
    )
    .subscribe(observer);
