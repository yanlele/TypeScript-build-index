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
}


export default Sort;