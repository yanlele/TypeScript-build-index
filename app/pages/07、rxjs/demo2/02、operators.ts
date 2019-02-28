import {interval} from "rxjs";
import {map} from "rxjs/operators";


class Operator {
    static simple() {
        const source$ = interval(1000).pipe(
            map(x => x * 2)
        );

        source$.subscribe(x => console.log(x));
    }
}

export default Operator;
