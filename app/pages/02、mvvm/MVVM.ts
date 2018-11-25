/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-11-25 23:12
 */
import Methods from "./Methods";
import Compile from "./Compile";

class MVVM {
    private $el: HTMLElement;
    private $data: object;
    private $methods: object;

    constructor(opts: any) {
        this.init(opts);
        Methods.observe(this.$data);
        new Compile(this);
    }

    init(opts: any) {
        if(opts.el.nodeType === 1) {
            this.$el = opts.el;
        } else {
            this.$el = document.querySelector(opts.el);
        }

        this.$data = opts.data || {};
        this.$methods = opts.method || {};
        for (let key in this.$data) {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get: ()=> {
                    return this.$data[key];
                },

                set: (newValue)=> {
                    this.$data[key] = newValue;
                }
            })
        }

        for (let key in this.$methods) {
            this.$methods[key] = this.$methods[key].bind(this);
        }
    }
}


export default MVVM;