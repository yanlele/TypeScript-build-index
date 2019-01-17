/**
 * create by yanle
 * create time 2019/1/17 11:48 PM
 */
import Store from "./Store";


class Index {
    run() {
        console.log('run');
        Store.getInstance().setStore('name', 'yanle');
        Store.getInstance().setStore('age', 25);
        console.log(Store.getInstance().getStore());
        console.log(Store.getInstance().getStore('age'));
    }
}

let index = new Index();
index.run();