import Store from "./Store";
import Observer from "./Observer";

/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-11-25 23:09
 */

// 订阅者
class Subject {
    private id: number;
    private observers: Observer[];

    constructor() {
        this.id = Store._instance._id++;
        this.observers = [];
    }

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        let index: number = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notify() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }


    get _id(): number {
        return this.id;
    }

    set _id(value: number) {
        this.id = value;
    }

    get _observers(): Observer[] {
        return this.observers;
    }

    set _observers(value: Observer[]) {
        this.observers = value;
    }
}

export default Subject;