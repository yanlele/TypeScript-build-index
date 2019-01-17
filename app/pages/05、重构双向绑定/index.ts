/**
 * create by yanle
 * create time 2019/1/17 11:48 PM
 */
import Store from "./Store";


class Index {
    run() {
        console.log('run');

        console.log(Store.getInstance());

    }
}

let index = new Index();
index.run();