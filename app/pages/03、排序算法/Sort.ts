/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-11-27 22:50
 */


class Sort {
    quickSort(arr: number[]) {
        if (arr.length <= 1) {
            return arr;
        }
        let middle: number, middleIndex: number, left: number[] = [], right: number[] = [];
        middleIndex = Math.floor(arr.length / 2);
        middle = arr.splice(middleIndex, 1)[0];
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
        let temp: number, len = arr.length;
        for (let i: number = 0 ; i < len - 1; i++) {
            for (let j: number = 0; j< len - 1 - i;j++) {
                if(arr[j] > arr[j+1]) {
                    temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    selection(arr: number[]) {
        let minIndex: number, len = arr.length, temp: number;
        for (let i: number = 0; i< len - 1;i++) {
            minIndex = i;
            for (let j: number = i +1;j<len;j++) {
                if(arr[minIndex] > arr[j]) {
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
        let len = arr.length;
        let preIndex: number, current: number;

        for (let i : number = 1; i < len;i++) {
            preIndex = i -1;
            current = arr[i];
            while (preIndex >= 0 && arr[preIndex] > current) {
                arr[preIndex + 1] = arr[preIndex];
                preIndex --;
            }
            arr[preIndex+ 1] =current;
        }
        return arr;
    }
}


export default Sort;