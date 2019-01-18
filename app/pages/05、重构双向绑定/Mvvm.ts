/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2019-01-18 9:39
 */

import * as types from './index.d';
import Store from "./Store";
import Compile from './Compile';
import Subject from "./Subject";

let observe: (data: object)=>any = function(data: object) {
    for (let key in data) {
        let value = data[key];
        let subject = new Subject();
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get: function () {
                if(Store.getInstance().getStore('currentObserver')) {
                    Store.getInstance().getStore('currentObserver').subscribeTo(subject);
                }
                return value;
            },
            set: function (newValue) {
                value = newValue;
                subject.notify();
            }
        });
        if(typeof value === 'object') {
            observe(value);
        }
    }
};

class Mvvm {
    private $data: any = {};
    private $methods: any = {};
    private $el: HTMLElement;
    constructor(opts: types.IMvvmOpts) {
        // 默认存储对象
        Store.getInstance().setStore('id', 0);
        Store.getInstance().setStore('currentObserver', null);
        Store.getInstance().setStore('observe', observe);

        this.init(opts);
        Store.getInstance().getStore('observe')(this.$data);
        new Compile(this);
    }

    init(opts: types.IMvvmOpts) {
        if(opts.el.noeType === 1) {
            this.$el = opts.el;
        } else {
            this.$el = document.querySelector(opts.el);
        }

        this.$data = opts.data;
        this.$methods = opts.methods;

        for (let key in this.$data) {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get: () => {
                    return this.$data[key];
                },
                set: newValue => {
                    this.$data[key] = newValue
                }
            })
        }

        for (let key in this.$methods) {
            this.$methods[key] = this.$methods[key].bind(this);
        }
    }


    get _$data(): any {
        return this.$data;
    }

    set _$data(value: any) {
        this.$data = value;
    }

    get _$methods(): any {
        return this.$methods;
    }

    set _$methods(value: any) {
        this.$methods = value;
    }
}

export default Mvvm;