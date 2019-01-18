/**
 * create by yanle
 * create time 2019/1/18 8:23 AM
 */
import Store from "./Store";
import Subject from './Subject';

class Observer {
    private subjects: object = {};
    private key: string;
    private vm: any;
    private cb: Function;
    private value: any;

    constructor(key: string, vm: any, cb: Function) {
        this.key = key;
        this.vm = vm;
        this.cb = cb;
        this.value = this.getValue();
    }

    getValue() {
        Store.getInstance().setStore('currentObserver', this);
        let value: any = this.vm.$data[this.key];
        Store.getInstance().setStore('currentObserver', null);
        return value;
    }

    update() {
        let oldValue: any = this.value;
        let value = this.getValue();
        if (oldValue !== value) {
            this.value = value;
            this.cb.bind(this.vm)(value, oldValue);
        }
    }

    subscribeTo(subject: Subject) {
        if (!this.subjects[subject._id]) {
            subject.addObserver(this);
            this.subjects[subject._id] = subject;
        }
    }
}

export default Observer;