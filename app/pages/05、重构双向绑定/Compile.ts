/**
 * create by yanle
 * create time 2019/1/18 8:44 AM
 */

import Observer from './Observer';

// 编译对象
class Compile {
    private vm: any;
    private node: HTMLElement;
    constructor(vm) {
        this.vm = vm;
        this.node = vm.$el;
        this.compile();
    }

    compile() {
        this.traverse(this.node);
    }

    traverse(node: HTMLElement) {
        if(node.nodeType === 1) {
            this.compileNode(node);
            node.childNodes.forEach(childNode=> this.traverse(<HTMLElement>childNode));
        } else if(node.nodeType === 3) {
            this.compileText(node);
        }
    }

    // 文本编译
    compileText(node: HTMLElement) {
        let reg: RegExp = /{{.+?}}/g;
        let match;
        while (match = reg.exec(node.nodeValue)) {
            let raw: string = match[0];
            let key: string = match[1].trim();
            node.nodeValue = node.nodeValue.replace(raw, this.vm.$data[key]);           // 页面渲染的时候就直接触发

            // 这个是用于页面数据监听的时候触发
            new Observer(this.vm, key, function (value, oldValue) {
                node.nodeValue = node.nodeValue.replace(oldValue, value);
            })
        }
    }

    // 节点编译
    compileNode(node: HTMLElement) {
        let attrs: Attr[] = Array.from(node.attributes);
        attrs.forEach(attr=>{
            if(this.isModelDirective(attr.name)) {
                this.bindModel(node, attr)
            } else if(this.isEventDirective(attr.name)) {
                this.bindEventHandler(node, attr);
            }
        })
    }

    // 双向绑定
    bindModel(node, attr: Attr) {
        let key: string = attr.value;
        node.value = this.vm.$data[key];
        new Observer(this.vm, key, function (newValue) {
            node.value = newValue;
        });
        node.oninput = (e) => {
            this.vm.$data[key] = e.target.value;
        }
    }

    // 事件绑定
    bindEventHandler(node, attr: Attr) {
        let eventType = attr.name.substr(5);
        let methodName = attr.name;
        node.addEventListener(eventType, this.vm.$methods[methodName]);
    }

    isModelDirective(attrName) {
        return attrName === 'v-model'
    }

    isEventDirective(attrName) {
        return attrName.indexOf('v-on') === 0;
    }
}

export default Compile;
