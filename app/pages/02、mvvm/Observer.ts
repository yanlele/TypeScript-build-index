/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-11-25 23:06
 */

import Store from "./Store";
import Subject from "./Subject";

// 观察者
class Observer {
    private subjects: object;
    private vm: any;
    private key: string;
    private cb: any;
    private value: string;

    constructor(vm: any, key: string, cb: any) {
        this.subjects = {};
        this.vm = vm;
        this.key = key;
        this.cb = cb;
        this.value = this.getValue();
    }

    // 跟新数据
    update(): void {
        let oldValue: string = this.value;
        let value: string = this.getValue();
        if (oldValue !== value) {
            this.value = value;
            this.cb.bind(this.vm)(value, oldValue)
        }
    }

    // 添加订阅者
    subscribeTo(subject: Subject): void {
        if (!this.subjects[subject._id]) {
            subject.addObserver(this);
            this.subjects[subject._id] = subject
        }
    }

    getValue(): string {
        Store.getInstance()._currentObserver = this;
        let value: string = this.vm.$data[this.key];
        Store.getInstance()._currentObserver = null;
        return value
    }

    get _subjects(): object {
        return this.subjects;
    }

    set _subjects(value: object) {
        this.subjects = value;
    }

    get _vm(): any {
        return this.vm;
    }

    set _vm(value: any) {
        this.vm = value;
    }

    get _key(): string {
        return this.key;
    }

    set _key(value: string) {
        this.key = value;
    }

    get _cb(): any {
        return this.cb;
    }

    set _cb(value: any) {
        this.cb = value;
    }

    get _value(): string {
        return this.value;
    }

    set _value(value: string) {
        this.value = value;
    }
}


export default Observer;