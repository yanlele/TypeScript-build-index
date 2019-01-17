/**
 * create by yanle
 * create time 2019/1/17 11:51 PM
 */

/**
 * 单例模式的存储对象
 */
class Store {
    private static instance: Store;
    private mapStore: Map<string, any> = new Map<string, any>();

    static get _instance(): Store {
        return this.instance;
    }

    static set _instance(value: Store) {
        this.instance = value;
    }


    get _mapStore(): Map<string, any> {
        return this.mapStore;
    }

    set _mapStore(value: Map<string, any>) {
        this.mapStore = value;
    }

    // 获取单例
    static getInstance() {
        if (!this._instance) {
            this._instance = new Store();
        }
        return this._instance;
    }

    //
    setStore(key: string, value: any) {
        this._mapStore.set(key, value);
    }

    getStore(key: string = '') {
        if (key) {
            return this._mapStore.get(key);
        }
        return this._mapStore.entries()
    }

    deleteStore(key: string = '') {
        if(key) {
            this._mapStore.delete(key);
        }
        this._mapStore.clear();
    }
}

export default Store;


