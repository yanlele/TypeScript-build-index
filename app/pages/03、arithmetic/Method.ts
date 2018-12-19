class Method {
    static dubounce(func: Function, wait: number, immediate: boolean) {
        /*let timer;
        let debounced = function (...args) {
            let context = this;
            if(timer) clearTimeout(timer);
            if(immediate) {
                let now = !timer;
                if(now) {
                    func.apply(context, args);
                    timer = setTimeout(function () {
                        return timer = null
                    }, wait)
                }
            } else {
                timer = setTimeout(function () {
                    func.apply(context, args);
                    timer = null;
                }, wait)
            }
        };

        let cancel: Function = function () {
            if(timer) {
                clearTimeout(timer);
                timer = null
            }
        };

        return {
            debounced,
            cancel
        }*/


        let timer;
        let debounced = function (...args) {
            let context = this;
            if(timer) {
                clearTimeout(timer);
            }

            if(immediate) {
                let now = !timer;
                if(now) {
                    func.apply(context, args);
                    timer = setTimeout(function () {
                        timer = null;
                    }, wait)
                }
            } else {
                timer = setTimeout(function () {
                    func.apply(context, args);
                    timer = null;
                }, wait)
            }
        };

        let cancel = function () {
            if(timer) {
                clearTimeout(timer);
                timer = null
            }
        };
        return {
            debounced,
            cancel
        }
    }

    static throttle(func, wait) {
        /*let previous:number = 0;
        let context, args, time, remaining;
        return function() {
            context = this;
            let now: number = new Date().getTime();
            args = arguments;
            remaining = wait - (now - previous);
            if(remaining <= 0) {                        // 第一次直接执行
                func.apply(context, args);
                previous = now;
            } else {
                if(time) {
                    clearTimeout(time)
                }
                time = setTimeout(()=> {
                    func.apply(context, args);
                    time = null;
                    previous = new Date().getTime();
                }, remaining)
            }
        }*/

        /*let pre: number = 0;
        let timer, context, remain: number;
        return function(...args: Array<any>) {
            context = this;
            let now: number = +new Date();
            remain = wait - (now - pre);
            if(remain <=0) {
                func.apply(context, args);
                pre = now;
            } else {
                if(timer) {
                    clearTimeout(timer);
                    timer = null
                }
                timer = setTimeout(function () {
                    func.apply(context, args);
                    timer = null;
                    pre = +new Date();
                }, remain)
            }
        }*/

        let pre: number = 0;
        let timer,
            context,
            remain: number;
        return function () {
            context = this;
            let now: number = +new Date();
            remain = wait - (now - pre);
            if(remain <= 0) {
                func.apply(context, arguments);
                pre = now;
            } else {
                if(timer) {
                    clearTimeout(timer);
                    timer = null;
                }
                timer = setTimeout(function () {
                    func.apply(context, arguments);
                    timer = null;
                    pre = +new Date()
                }, remain)
            }
        }
    }
}

export default Method;