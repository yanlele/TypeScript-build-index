/**
 * create by yanle
 * create time 2019/1/17 11:48 PM
 */
import Store from "./Store";
import Subject from "./Subject";
import Mvvm from "./Mvvm";



class Index {
    private observe: (data: object) => any;
    run() {
        console.log('run');
        console.log(Store.getInstance());
    }
}

let vm = new Mvvm({
    el: '#app',
    data: {
        name: 'yanle',
        age: 3
    },
    methods: {
        handleSayHello() {
            alert('hello ' + this.name);
        }
    }
});


let index = new Index();
index.run();