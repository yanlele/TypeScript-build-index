class Unique {

    // 最普通的排序方法，没有什么好说的哟
    unique1(arr:number[]) {
        let newArr: number[] = [];
        if(arr.length <=1) {
            return arr;
        }

        for (let i: number = 0;i < arr.length ;i++) {
            if(newArr.indexOf(arr[i]) === -1) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

    //速度最快， 占空间最多（空间换时间）就是占用的内存大一些
    unique2(arr: number[]) {

        let n: object = {}, newArr: number[] = [], len: number = arr.length, type: string, temp: number;
        for (let i : number  = 0;i< len;i++) {
            temp = arr[i];
            type = typeof temp;
            if(!n[temp]) {
                n[temp] = [type];
                newArr.push(temp)
            } else if(n[temp].indexOf(type) === -1) {
                n[temp].push(type);
                newArr.push(temp)
            }
        }
        return newArr;
    }
}

export default Unique;