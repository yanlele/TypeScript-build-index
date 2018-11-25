import Observer from "./Observer";

/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-11-25 23:10
 */


// 编译对象
class Compile {
    private vm: any;
    private node: HTMLElement;

    constructor(vm: any) {
        this.vm = vm;
        this.node = vm.$el;
        this.compile();
    }

    compile(): void {
        this.traverse(this.node);
    }

    traverse(node: HTMLElement): void {
        if(node.nodeType === 1) {
            this.compileNode(node);
            node.childNodes.forEach((childNode: HTMLElement) => {
                this.traverse(childNode)
            })
        } else if(node.nodeType === 3) {
            this.compileText(node)
        }
    }

    // 文本编译
    compileText(node: HTMLElement) {
        let reg: RegExp = /{{.+?}}/g;
        let match: any[];
        while (match = reg.exec(node.nodeValue)) {
            let raw: string = match[0];
            let key: string = match[1].trim();
            node.nodeValue = node.nodeValue.replace(raw, this.vm.$data[key]);
            new Observer(this.vm, key, function (val: string, oldVal: string) {
                node.nodeValue = node.nodeValue.replace(oldVal, val);
            })
        }
    }

    // 节点编译
    compileNode(node: any): void {
        let attrs = [...node.attributes];
        attrs.forEach(attr => {
            if (this.isModelDirective(attr.name)) {
                this.bindModel(node, attr);
            } else if (this.isEventDirective(attr.name)) {
                this.bindEventHandler(node, attr)
            }
        })
    }

    // 双向绑定
    bindModel(node: any, attr: Attr): void{
        let key = attr.value;
        node.value = this.vm.$data[key];
        new Observer(this.vm, key, function (newValue) {
            node.value = newValue
        });
        node.oninput = (e) => {
            console.log(e.target.value);
            this.vm.$data[key] = e.target.value;
        }
    }

    bindEventHandler(node: HTMLElement, attr: Attr): void {
        let eventType = attr.name.substr(5);
        let methodName = attr.name;
        node.addEventListener(eventType, this.vm.$methods[methodName]);
    }

    isModelDirective(attrName: string): boolean {
        return attrName === 'v-model'
    }

    isEventDirective(attrName: string): boolean{
        return attrName.indexOf('v-on') === 0;
    }


    get _vm(): any {
        return this.vm;
    }

    set _vm(value: any) {
        this.vm = value;
    }

    get _node(): HTMLElement {
        return this.node;
    }

    set _node(value: HTMLElement) {
        this.node = value;
    }
}

export default Compile;