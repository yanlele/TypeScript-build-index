/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-11-24 22:52
 */

// import Main from './Main';
import './index.less';
import $ from 'jquery';
// import Store from './Store';
//
// let helloTemplate = require('../../components/template/hello.hbs');
//
// Store.getInstance()._id;
//
// let helloTemplateComponent = helloTemplate({
//   name: 'yanle',
//   a: 1,
//   b: 2
// });
//
// document.getElementById('container').innerHTML = helloTemplateComponent;

document.querySelector('.down-button').addEventListener('click', () => {
  for (let i = 0; i < 5; i += 1) {
    const img = document.createElement('a');
    img.setAttribute('target', '_blank');
    img.setAttribute('download', '1.jpg');
    img.setAttribute('href', '/img/1691bb1348a07d78b48cdeba8dc4c9d4.jpg');
    img.innerText = 'img 下载';
    img.click();
  }
});
