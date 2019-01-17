/**
 * create by yanle
 * create time 2019/1/17 11:51 PM
 */

/**
 * 单例模式的存储对象
 */
class Store {
    private static instance: Store;

    static get _instance(): Store {
        return this.instance;
    }

    static set _instance(value: Store) {
        this.instance = value;
    }

    static getInstance() {
        if(!this._instance) {
            this._instance = new Store();
        }
        return this._instance;
    }
}

export default Store;


