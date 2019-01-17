/**
 * create by yanle
 * create time 2019/1/17 11:48 PM
 */
import Store from "./Store";

let observe: (data:object) =>any = function(data: object) {

};

class Index {
    private observe: (data: object) => any;
    constructor() {
        // 默认存储对象
        Store.getInstance().setStore('id', 0);
        Store.getInstance().setStore('currentObserver', null);
        Store.getInstance().setStore('observe', observe);
    }

    run() {
        console.log('run');
        console.log(Store.getInstance());
    }
}

let index = new Index();
index.run();