import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

const source$ = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
});
const observer = {
    next: item => console.log(item)
};
const subscription = source$.subscribe(observer);
