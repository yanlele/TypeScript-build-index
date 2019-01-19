/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2019-01-19 11:55
 */

class Evente {
    private map: any;
    constructor() {
        this.map = {}
    }

    add(key: string, fun: Function) {
        if(this.map[key]) {
            this.map[key].push(fun);
            return;
        }
        this.map[key] = [fun];
    }

    emit(key: string, ...args) {
        if(this.map[key]) {
            this.map[key].map(function (fun) {
                fun(...args);
            })
        }
    }

    run() {
        let e: Evente = new Evente();
        e.add('hello', (err, name) => {
            if(err) {
                console.log(err);
            } else {
                console.log(name);
            }
        });
        e.emit('hello', '发生错误');
        e.emit('hello', null, 'hello nodejs');
    }
}

export default Evente;