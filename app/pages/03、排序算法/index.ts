/**
 * create by yanlele
 * create time 2018-11-26 10:50
 */
import Sort from "./Sort";

let arrNumber: number[] = [12, 22, 34, 56, 11, 3, 77, 39, 32];


class Index {
    main() {
        let sort: Sort = new Sort();

        console.log(sort.quickSort(arrNumber));
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

    dubbleSort(arr: number[]) {
        let len: number = arr.length;
        for (let i: number = 0; i < len - 1; i++) {
            for (let j: number = i - 1; j < len - 1 - i; j++) {
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
            minIndex = 1;
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

console.log(index.quickSort(arrNumber));
console.log(index.dubbleSort(arrNumber));
console.log(index.selectionSort(arrNumber));
console.log(index.insertSort(arrNumber));
console.log('=================================');
index.main();
