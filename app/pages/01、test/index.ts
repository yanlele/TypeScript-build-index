/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-11-24 22:52
 */

import Main from './Main';
require('./index.less');
import Store from './Store';


// console.log(123);
// let main = new Main();
// main.run();
//
// console.log(main._age);


Store.getInstance()._id;

let helloTemplate = require('../../components/template/hello.hbs');
let helloTemplateComponent = helloTemplate({
    name: 'yanle',
    a: 1,
    b: 2
});

document.getElementById('container').innerHTML = helloTemplateComponent;