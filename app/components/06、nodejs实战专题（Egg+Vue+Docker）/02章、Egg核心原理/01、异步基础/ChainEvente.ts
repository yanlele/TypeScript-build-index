/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2019-01-19 12:54
 */

class ChainEvente {
    private map: any;

    constructor() {
        this.map = {};
    }

    add(key: string, fn: Function) {
        if (this.map[key]) {
            this.map[key].push(fn);
            return;
        }
        this.map[key] = [fn];
        return this;
    }

    emit(key, ...args) {
        if (this.map[key]) {
            for (let fn of this.map[key]) {
                fn(...args)
            }
        }
        return this;
    }

    run() {
        let e2 = new ChainEvente();
        e2.add('hello', (err, name) => {
            if (err) {
                console.log(err);
            } else {
                console.log(name)
            }
        })
            .emit('hello', '发生了错误')
            .emit('hello', null, 'hello nodejs ChainEvente');
    }
}

export default ChainEvente;