import {interval} from 'rxjs';
import {map, switchAll, take} from 'rxjs/operators';

interval(1500).pipe(
    take(2),
    map(x => interval(1000).pipe(
        map(y => x + ':' + y),
        take(2))
    ),
    switchAll()
).subscribe(console.log);  // 0:0// 1:0// 1:1
