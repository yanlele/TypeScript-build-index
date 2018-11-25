/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-11-25 21:19
 */
import './index.less';
import MVVM from "./MVVM";

let vm = new MVVM({
    el: '#app',
    data: {
        name: 'yanlele',
        age: 25
    },
    methods: {
        say() {
            alert(`hello world ${this.name}`)
        }
    }
});



