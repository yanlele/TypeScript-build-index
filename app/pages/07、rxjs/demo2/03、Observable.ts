import {Observable, of, fromEventPattern} from 'rxjs';

class ObservableClass {
  static simple() {
    const source$ = new Observable(observe => {
      observe.next(1);
      observe.next(1);
      observe.next(1);
    });
    const observer = {
      next: item => console.log(item),
    };

    const subscription = source$.subscribe(observer);
  }

  static ofFunc() {
    const source$ = of(1, 2, 3);
    const observer = {
      next: item => console.log(item),
    };
    const subscription = source$.subscribe(observer);
  }
}

export default ObservableClass;
