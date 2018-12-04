class Method {
    static dubounce(func: Function, wait: number, immediate: boolean) {
        let timer;
        let debounced = function (...args) {
            let context = this;
            if(timer) clearTimeout(timer);
            if(immediate) {
                let callNow = !timer;
                if(callNow) {
                    func.call(context, args);
                }
                timer = setTimeout(()=>timer = null, wait);
            } else {
                timer = setTimeout(function(){
                    func.call(context, args);
                }, wait)
            }
        };
        let cancel = function() {
           clearTimeout(timer);
           timer = null;
        };
        return {
            debounced,
            cancel
        }
    }

    static throttle(func, wait) {
        let previous:number = 0;
        let context, args, time, remaining;
        return function() {
            let now: number = new Date().getTime();
            args = arguments;
            remaining = wait - (now - previous);
            if(remaining <= 0) {
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
        }
    }
}

export default Method;