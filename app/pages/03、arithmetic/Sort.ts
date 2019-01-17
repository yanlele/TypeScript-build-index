/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-11-27 22:50
 */


class Sort {
    quickSort(arr: number[]) {
        // if(arr.length < 1) {
        //     return arr;
        // }
        // let middle: number,
        //     middleIndex: number,
        //     left: number[] = [],
        //     right: number[] = [];
        // middleIndex = Math.floor(arr.length/2);
        // middle = arr.splice(middleIndex, 1)[0];
        // for(let i:number =0 ;i  < arr.length ;i ++) {
        //     if(arr[i] < middle) {
        //         left.push(arr[i])
        //     } else {
        //         right.push(arr[i])
        //     }
        // }
        // return this.quickSort(left).concat([middle], this.quickSort(right));

        if (arr.length < 1) {
            return arr;
        }
        let middleIndex: number;
        let middle: number;
        let left: number[] = [];
        let right: number[] = [];
        middleIndex = Math.floor(arr.length/2);
        middle = arr.splice(middleIndex, 1)[0];
        for (let i : number = 0;i< arr.length;i++) {
            if(arr[i] < middle) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return this.quickSort(left).concat([middle], this.quickSort(right));
    }


    bubbleSort(arr: number []) {
        /*let temp: number;
        let len: number = arr.length;
        for (let i: number = 0; i < len - 1; i++) {
            for (let j: number = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;*/
        let temp: number,
            len: number = arr.length;
        for (let i: number = 0; i < arr.length - 1; i++) {
            for (let j: number = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    selectionSort(arr: number[]) {
        /*let minIndex:number;
        let temp: number;
        let len: number = arr.length;

        for(let i : number = 0; i< len - 1;i++) {
            minIndex = i;
            for (let j: number = i+1; j< len; j++) {
                if(arr[minIndex] > arr[j]) {
                    minIndex = j;
                }
            }

            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

        return arr;*/
        let minIndex: number,
            temp: number,
            len: number = arr.length;
        for (let i: number = 0; i < len - 1; i++) {
            minIndex = i;
            for (let j: number = i + 1; j < len; j++) {
                if (arr[minIndex] > arr[j]) {
                    minIndex = j
                }
            }
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        return arr;
    }

    insertSort(arr: number[]) {
        /*let len: number = arr.length,
            temp: number,
            current: number;
        for (let i: number = 1; i < len; i++) {
            current = arr[i];
            for (let j: number = i - 1; j >= 0 && arr[j] > current; j--) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        return arr;*/

        let len: number = arr.length,
            temp: number,
            current: number;
        for (let i: number = 1; i < len; i++) {
            current = arr[i];
            for (let j: number = i - 1; j >= 0 && arr[j] > current; j--) {
                temp = arr[i];
                arr[i] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        return arr;
    }

    shellSort(arr: number[]) {
        /*let len: number = arr.length,
            gap: number = Math.floor(len / 2),
            temp: number;
        for (gap; gap > 0; gap = Math.floor(gap / 2)) {
            for (let i: number = 1; i < len; i++) {
                for (let j: number = i - gap; j >= 0 && arr[j] > arr[j + gap]; j -= gap) {
                    temp = arr[j];
                    arr[j] = arr[j + gap];
                    arr[j + gap] = temp;
                }
            }
        }
        return arr;*/

        let len: number = arr.length,
            gap: number = Math.floor(len / 2),
            temp: number;
        for (gap; gap > 0; gap = Math.floor(gap / 2)) {
            for (let i: number = 1; i < len; i++) {
                for (let j: number = i - gap; j >= 0 && arr[j] > arr[j + gap]; j -= gap) {
                    temp = arr[j];
                    arr[j] = arr[j + gap];
                    arr[j + gap] = temp;
                }
            }
        }
        return arr;
    }
}


export default Sort;