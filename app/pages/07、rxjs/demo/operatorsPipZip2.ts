import {interval, zip} from 'rxjs';
import {take, map} from 'rxjs/operators';

const source$ = interval(500).pipe(take(3));
const newest$ = interval(300).pipe(take(6));
const add = (x, y) => x + y;

zip(source$, newest$).pipe(
    map(x => add(...x))
).subscribe(x => console.log(x));
