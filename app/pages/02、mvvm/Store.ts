/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2019-01-18 16:09
 */

class Store {
    private storeMap: Map<string, any> = new Map<string, any>();
    private static instance: Store;

    // 获取存储对象
    static getInstance() {
        if(!this.instance) {
            this.instance = new Store();
        }
        return this.instance;
    }

    // 设置存储
    setStore(key: string, value: any) {
        this.storeMap.set(key, value);
    }

    // 获取
    getStore(key: string = '') {
        if(key) {
            return this.storeMap.get(key)
        }
        return this.storeMap.entries();
    }

    // 删除
    deleteStore(key: string = '') {
        if(key) {
            this.storeMap.delete(key)
        }
        this.storeMap.clear();
    }
}

export default Store;