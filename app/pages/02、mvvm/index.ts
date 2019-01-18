/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-11-25 21:19
 */
import './index.less';

class Index {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        console.log('name: ', this.name);
        console.log('age',  this.age);
    }
}

let index: Index = new Index('YANLE', 25);
index.getInfo();