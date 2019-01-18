/**
 * create by yanle
 * create time 2019/1/18 8:44 AM
 */

// 编译对象
class Compile {
    private vm: any;
    private node: any;
    constructor(vm) {
        this.vm = vm;
        this.node = vm.$el;
    }
}

export default Compile;
