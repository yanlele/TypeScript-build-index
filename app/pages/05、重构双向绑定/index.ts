/**
 * create by yanle
 * create time 2019/1/17 11:48 PM
 */
import Store from "./Store";


class Index {
    run() {
        console.log('run');
        Store.setStore('name', 'yanle');
        Store.setStore('age', 25);
        console.log(Store.getStore());
    }
}

let index = new Index();
index.run();