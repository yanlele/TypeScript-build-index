/**
 * create by yanle
 * create time 2019/1/17 11:48 PM
 */

import './index.less';
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

let timer = setInterval(function () {
    vm._$data.age++;
    if(vm._$data.age >=10) {
        clearInterval(timer)
    }
}, 1000);