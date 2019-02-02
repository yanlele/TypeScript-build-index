import {interval} from 'rxjs';
import {zip, take} from 'rxjs/operators';

const source$ = interval(500).pipe(take(3));
const newest$ = interval(300).pipe(take(6));

source$.pipe(
    zip(newest$, (x, y) => x + y)
).subscribe(x => console.log(x));// 0// 2// 4
