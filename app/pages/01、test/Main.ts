/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-11-24 23:56
 */


class Main {
    private name: string = 'yanle';
    private age: number = 26;

    run() {
        console.log('main');
    }


    get _name(): string {
        return this.name;
    }

    set _name(value: string) {
        this.name = value;
    }

    get _age(): number {
        return this.age;
    }

    set _age(value: number) {
        this.age = value;
    }
}

export default Main;