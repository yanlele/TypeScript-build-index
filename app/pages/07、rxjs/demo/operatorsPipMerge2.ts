import {interval, merge} from 'rxjs'
import {take} from 'rxjs/operators'

merge(
    interval(500).pipe(take(3)),
    interval(300).pipe(take(6))
).subscribe(x => console.log(x));
