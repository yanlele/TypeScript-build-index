/**
 * create by yanlele
 * create time 2018-11-26 10:50
 */

let arrNumber: number[] = [12, 22, 34, 56, 11, 3, 77, 39, 32];
class Index {
    main() {

    }

    quickSort(arr: number[]) {
        if (arr.length <= 1) {
            return arr;
        }
        let middleIndex: number = Math.floor(arr.length / 2);
        let middle: number = arr.splice(middleIndex, 1)[0];
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
}

let index = new Index();
console.log(index.quickSort(arrNumber));

document.write(index.quickSort(arrNumber));