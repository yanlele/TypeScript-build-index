class Index {
    static id: number = 0;
    static currentObserver = null;

    static observe(data) {
        if (!data || typeof data !== 'object') {
            return false;
        }

        for (let key in data) {
            let val = data[key];
            let subject = new Subject();
            Object.defineProperty(data, key, {
                enumerable: true,
                configurable: true,
                get: function () {
                    if (this.currentObserver) {
                        this.currentObserver.subscribeTo(subject);
                    }
                    return val;
                },
                set: function (newVal) {
                    val = newVal;
                    subject.notify();
                }
            });

            if (typeof val === 'object') {
                Index.observe(val);
            }
        }
    }

    main() {
        let vm = new MVVM({
            el: '#app',
            data: {
                name: 'yanle',
                age: 25
            }
        })
    }
}

// 订阅者
class Subject {
    private id: number;
    private observers;
    constructor() {
        this.id = Index.id++;
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        let index: number = this.observers.indexOf(observer);
        if(index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notify() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }
}

// 观察者
class Observer {
    private subjects: Object;
    private vm;
    private key;
    private cb: Function;
    private value;
    constructor(vm, key, cb) {
        this.subjects = {};
        this.vm = vm;
        this.key = key;
        this.cb = cb;
        this.value = this.getValue();
    }

    getValue() {
        Index.currentObserver = this;
        let value = this.vm.$data[this.key];            // 获取值
        Index.currentObserver = null;
        return value;
    }

    update() {
        let oldVal = this.value;
        let value = this.getValue();
        if(value!== oldVal) {
            this.value = value;
            this.cb.bind(this.vm)(value, oldVal);
        }
    }

    subscribeTo(subject) {
        if(!this.subjects[subject.id]) {
            subject.addObserver(this);
            this.subjects[subject.id] = subject;
        }
    }
}

class Compile {
    private vm;
    private node;
    constructor(vm) {
        this.vm = vm;
        this.node = vm.$el;
        this.compile();
    }

    compile() {

    }

    traverse(node) {
        if(node.nodeType === 1) {
        }
    }

    compileText(node) {
        let reg = /{{(.+?)}}/g;
        let match;
        while (match === reg.exec(node.nodeValue)) {
            let raw = match[0];
            let key = match[1].trim();
            node.nodeValue = node.nodeValue.replace(raw, this.vm.$data[key]);
            new Observer(this.vm, key , function (val, oldVal) {
                node.nodeValue = node.nodeValue.replace(oldVal, val);
            })
        }
    }

    compileNode(node) {
        let attrs = [...node.attributes];
        attrs.forEach(attr=> {
            if(attr.name === 'v-model') {
                this.bindModel(node, attr);
            }
        })
    }

    bindModel(node, attr) {
        let key = attr.value;
        node.value = this.vm.$data[key];
        new Observer(this.vm, key, function (newVal) {
            node.value = newVal;
        });
        node.oninput = (e) => {
            this.vm.$data[key] = e.target.value;
        }
    }
}

class MVVM {
    private $data: object;
    private $el: string | HTMLElement;
    private $methods;
    constructor(opts) {
        this.init(opts);
        Index.observe(this.$data);
        new Compile(this);
    }

    init(opts) {
        if(opts.el.nodeType === 1) {
            this.$el = opts.el;
        } else {
            this.$el = document.querySelector(opts.el)
        }

        this.$data = opts.data || {};
        this.$methods = opts.methods || {};

        for (let key in this.$data) {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get:()=> {
                    return this.$data[key];
                },
                set: (newValue) => {
                    this.$data[key] = newValue;
                }
            })
        }

        for(let key in this.$methods) {
            this.$methods[key] = this.$methods.bind(this);
        }
    }
}

let index = new Index();
index.main();


export default Index;