import {fromEventPattern} from 'rxjs'

class EventEmitter {
    private readonly handlers: {};

    constructor() {
        this.handlers = {}
    }

    on(eventName, name = null, handler) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = []
        }
        if (name) {
            console.log(`订阅人: ${name}`);
        }
        if (typeof handler === 'function') {
            this.handlers[eventName].push(handler)
        } else {
            throw new Error('handler 不是函数！！！')
        }
    }

    off(eventName, handler) {
        this.handlers[eventName].splice(this.handlers[eventName].indexOf(handler), 1)
    }

    emit(eventName, ...args) {
        this.handlers[eventName].forEach(handler => {
            handler(...args)
        })
    }
}

const event = new EventEmitter();

const subscription = fromEventPattern(
    event.on.bind(event, 'say', 'yanle'),
    event.off.bind(event, 'say')
).subscribe(x => console.log(x));

let timer = (() => {
    let number = 1;
    return setInterval(() => {
        if (number === 5) {
            clearInterval(timer);
            timer = null
        }
        event.emit('say', number++)
    }, 1000)
})();

setTimeout(() => {
    subscription.unsubscribe()
}, 3000);
