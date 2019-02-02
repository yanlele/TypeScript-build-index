import {interval} from 'rxjs';
import {take, withLatestFrom} from 'rxjs/operators';

const source$ = interval(500).pipe(take(3));
const newest$ = interval(300).pipe(take(6));

source$.pipe(
    withLatestFrom(newest$)
).subscribe(x => console.log(x));// [0, 0]// [1, 2]// [2, 4]
