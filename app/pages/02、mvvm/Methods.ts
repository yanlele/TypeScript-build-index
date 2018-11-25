/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-11-25 22:58
 */

import Store from './Store';
import Subject from "./Subject";


class Methods {
    static observe(data: any) {
        // 如果不是一个对象就终止
        if (!data || typeof data !== 'object') {
            return false;
        }
        for (let key in data) {
            let val = data[key];
            let subject = new Subject();

            // 绑定监听
            Object.defineProperty(data, key, {
                enumerable: true,
                configurable: true,
                get: function () {
                    if (Store.getInstance()._currentObserver) {
                        Store.getInstance()._currentObserver.subscribeTo(subject);
                    }
                    return val;
                },
                set: function (newValue) {
                    val = newValue;
                    subject.notify();
                }
            });

            if (typeof val === 'object') {
                Methods.observe(val)
            }
        }
    }
}

export default Methods;