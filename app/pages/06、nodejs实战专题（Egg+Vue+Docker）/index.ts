/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2019-01-19 11:39
 */

/*事件实现异步*/
// 第一种写法

import AsyncBase from '../../components/06、nodejs实战专题（Egg+Vue+Docker）/02章、Egg核心原理/01、异步基础/AsyncBase';

class Main {
    private dom: any;



    constructor() {
        this.dom = {
            class0201: Main.getElementID('class02-01')
        }
    }

    static getElementID(id) {
        return document.getElementById(id);
    }

    init() {

    }

    static register(dom:HTMLElement, event) {
        dom.addEventListener('click', event);
    }

    static two() {
        let asyncBase: AsyncBase = new AsyncBase();
    }
}

Main.two();

