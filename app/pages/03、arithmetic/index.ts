/**
 * create by yanlele
 * create time 2018-11-26 10:50
 */
import Sort from "./Sort";

let arrNumber: number[] = [12, 22, 34, 56, 11, 3, 77, 39, 32];


class Index {
    main() {
        let sort: Sort = new Sort();
        // console.log(sort.quickSort(arrNumber.slice(0)));
        // console.log(sort.bubbleSort(arrNumber.splice(0)));
        // console.log(sort.selectionSort(arrNumber.splice(0)));
        // console.log(sort.insertSort(arrNumber.splice(0)))



        let $quickSort: HTMLElement = document.getElementById('quick-sort');
        let $bubbleSort: HTMLElement = document.getElementById('bubble-sort');
        let $selectionSort: HTMLElement = document.getElementById('selection-sort');
        let $insertSort: HTMLElement = document.getElementById('insert-sort');

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
        })

        console.log(arrNumber);
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
        for (let i: number = 0 ; i < len - 1; i++) {
            for (let j: number = 0; j< len - 1 - i;j++) {
                if(arr[j] > arr[j+1]) {
                    let temp: number = arr[j+1];
                    arr[j+1] = arr[j];
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
