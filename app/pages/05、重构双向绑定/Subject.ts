/**
 * create by yanle
 * create time 2019/1/18 8:12 AM
 */

class Subject {
    private id: number = 0;
    private observers: any[];
    constructor() {
        this.id++;
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        let index: number = this.observers.indexOf(observer);
        if(index > -1) {
            this.observers.splice(index, 1)
        }
    }

    notify() {
        this.observers.forEach( (observer)=> {
            observer.update();
        })
    }


    get _id(): number {
        return this.id;
    }

    set _id(value: number) {
        this.id = value;
    }

    get _observers(): any[] {
        return this.observers;
    }

    set _observers(value: any[]) {
        this.observers = value;
    }
}


export default Subject;