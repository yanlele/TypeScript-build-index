/**
 * create by yanlele
 * create time 2018-11-26 10:50
 */
import Sort from "./Sort";
import Unique from "./Unique";
import Method from "./Method";

let arrNumber: number[] = [12, 22, 34, 56, 11, 3, 77, 39, 32];

let uniqueNumber: number[] = [2, 44, 6, 12, 45, 12, 34, 88, 88, 99];


class Index {
    main() {
        let sort: Sort = new Sort();
        let unique: Unique = new Unique();


        // 排序算法
        console.log(arrNumber);
        let $quickSort: HTMLElement = document.getElementById('quick-sort');
        let $bubbleSort: HTMLElement = document.getElementById('bubble-sort');
        let $selectionSort: HTMLElement = document.getElementById('selection-sort');
        let $insertSort: HTMLElement = document.getElementById('insert-sort');
        let $shellSort: HTMLElement = document.getElementById('shell-sort');

        $quickSort.addEventListener('click', function () {
            console.log(sort.quickSort(arrNumber.slice(0)))
        });

        $bubbleSort.addEventListener('click', function () {
            console.log(sort.bubbleSort(arrNumber.slice(0)))
        });

        $selectionSort.addEventListener('click', function () {
            console.log(sort.selectionSort(arrNumber.slice(0)))
        });

        $insertSort.addEventListener('click', function () {
            console.log(sort.insertSort(arrNumber.slice(0)))
        });

        $shellSort.addEventListener('click', function () {
            console.log(sort.shellSort(arrNumber.slice(0)))
        });

        // 去重算法
        let $normalUnique: HTMLElement = document.getElementById('normal-unique1');
        let $unique2:HTMLElement = document.getElementById('unique2');
        let $unique3:HTMLElement = document.getElementById('unique3');
        let $unique4: HTMLElement = document.getElementById('unique4');


        $normalUnique.addEventListener('click', function () {
            console.log(unique.unique1(uniqueNumber.slice(0)));
        });

        $unique2.addEventListener('click', function () {
            console.log(unique.unique2(uniqueNumber.slice(0)))
        });

        $unique3.addEventListener('click', function () {
            console.log(unique.unique3(uniqueNumber.slice(0)))
        });

        $unique4.addEventListener('click' , function () {
            console.log(unique.unique4(uniqueNumber.slice(0)));
        });

        // 防抖和节流函数
        let {debounced, cancel} = Method.dubounce(function (...args) {
            console.log('我是防抖函数');
            console.log(args);
        }, 2000, false);

        let throttle = Method.throttle(function () {
            console.log('我是节流函数')
        }, 2000);

        let $debounce: HTMLElement = document.getElementById('debounce');
        let $debounceExpire: HTMLElement = document.getElementById('debounce-expire');
        let $throttle: HTMLElement = document.getElementById('throttle');
        let $throttleExpire: HTMLElement = document.getElementById('throttle-expire');

        $debounce.addEventListener('click', function () {
            debounced('123', 'yanle');
        });

        $debounceExpire.addEventListener('click', function () {
            cancel();
        });

        $throttle.addEventListener('click', function () {
             throttle();
        });
    }

    quickSort(arr: number[]) {
        if (arr.length <= 1) {
            return arr;
        }
        let middleIndex: number;
        let middle: number;
        middleIndex = Math.floor(arr.length / 2);
        middle = arr.splice(middleIndex, 1)[0];
        let left: number[] = [], right: number[] = [];
        for (let i: number = 0; i < arr.length; i++) {
            if (arr[i] < middle) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return this.quickSort(left).concat([middle], this.quickSort(right))
    }

    bubbleSort(arr: number[]) {
        let len = arr.length;
        for (let i: number = 0; i < len - 1; i++) {
            for (let j: number = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp: number = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    selectionSort(arr: number[]) {
        let len: number = arr.length;
        let minIndex: number, temp: number;
        for (let i: number = 0; i < len - 1; i++) {
            minIndex = i;
            for (let j: number = i + 1; j < len; j++) {
                if (arr[minIndex] > arr[j]) {
                    minIndex = j;
                }
            }

            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        return arr;
    }

    insertSort(arr: number[]) {
        let len: number = arr.length;
        let preindex: number, current: number;
        for (let i: number = 1; i < len; i++) {
            preindex = i - 1;
            current = arr[i];
            while (preindex >= 0 && arr[preindex] > current) {
                arr[preindex + 1] = arr[preindex];
                preindex--;
            }
            arr[preindex + 1] = current;
        }
        return arr;
    }
}

let index = new Index();

// console.log(index.quickSort(arrNumber.slice(0)));
// console.log(index.bubbleSort(arrNumber.splice(0)));
// console.log(index.selectionSort(arrNumber.splice(0)));
// console.log(index.insertSort(arrNumber.splice(0)));
console.log('=================================');
index.main();
