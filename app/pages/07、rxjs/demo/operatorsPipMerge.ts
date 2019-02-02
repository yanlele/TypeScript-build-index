import {interval} from 'rxjs'
import {merge, take} from 'rxjs/operators'

interval(500).pipe(
    take(3),
    merge(interval(300).pipe(take(6)))
).subscribe(x => console.log(x));
