/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-11-25 22:59
 */
import Observer from "./Observer";


class Store {
    private id:number = 0;
    private currentObserver: Observer;
    private static instance: Store;

    static getInstance() {
        if(!Store.instance) {
            Store.instance = new Store();
        }
        return Store.instance
    }


    get _id(): number {
        return this.id;
    }

    set _id(value: number) {
        this.id = value;
    }

    get _currentObserver(): Observer {
        return this.currentObserver;
    }

    set _currentObserver(value: Observer) {
        this.currentObserver = value;
    }

    static get _instance(): Store {
        return this.instance;
    }

    static set _instance(value: Store) {
        this.instance = value;
    }
}

export default Store;