import {interval, combineLatest} from 'rxjs';
import {take} from 'rxjs/operators';

const source$ = interval(500).pipe(take(3));
const newest$ = interval(300).pipe(take(6));

combineLatest(source$, newest$).subscribe(x => console.log(x));
// [0, 0]// [0, 1]// [0, 2]// [1, 2]// [1, 3]// [2, 3]// [2, 4]// [2, 5]
