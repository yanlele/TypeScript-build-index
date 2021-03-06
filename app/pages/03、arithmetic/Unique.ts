class Unique {

    // 最普通的排序方法，没有什么好说的哟
    unique1(arr: number[]) {
        /*let newArr: number[] = [];
        if(arr.length <=1) {
            return arr;
        }

        for (let i: number = 0;i < arr.length ;i++) {
            if(newArr.indexOf(arr[i]) === -1) {
                newArr.push(arr[i]);
            }
        }
        return newArr;*/

        let re: number[] = [];
        if (arr.length <= 1) {
            return arr;
        }
        for (let i: number = 0; i < arr.length; i++) {
            if (re.indexOf(arr[i]) === -1) {
                re.push(arr[i])
            }
        }
        return re;
    }

    //对象键值对法： 速度最快， 占空间最多（空间换时间）就是占用的内存大一些
    unique2(arr: number[]) {
        /*let n: object = {}, newArr: number[] = [], len: number = arr.length, type: string, temp: number;
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
        return newArr;*/

        let n: object = {},
            re: number[] = [],
            len: number = arr.length,
            type: string,
            temp: number;
        for (let i: number = 0; i < len; i++) {
            temp = arr[i];
            type = typeof temp;
            if(!n[temp]){
                n[temp] = [type];
                re.push(temp)
            } else if(n[temp].indexOf(type) === -1) {
                n[temp].push(type);
                re.push(temp)
            }
        }
        return re;
    }

    // 数组下标判断法
    unique3(arr: number[]) {
        // var n = [array[0]]; //结果数组
        // //从第二项开始遍历
        // for (var i = 1; i < array.length; i++) {
        //     //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
        //     //那么表示第i项是重复的，忽略掉。否则存入结果数组
        //     if (array.indexOf(array[i]) === i) n.push(array[i]);
        // }
        // return n;

        /*let newArr: number[] = [arr[0]];                // 结果数组
        for (let i: number = 1; i < arr.length; i++) {
            if (arr.indexOf(arr[i]) === i) {
                newArr.push(arr[i]);
            }
        }
        return newArr;*/

        let re: number[] = [arr[0]];
        for (let i: number = 1;i < arr.length; i++) {
            if(arr.indexOf(arr[i]) === i) {
                re.push(arr[i])
            }
        }
        return re;
    }

    // 排序后相邻去除法
    unique4(arr: number[]) {
        // array.sort();
        // var re = [array[0]];
        // for (var i = 1; i < array.length; i++) {
        //     if (array[i] !== re[re.length - 1]) {
        //         re.push(array[i]);
        //     }
        // }
        // return re;

        /*arr.sort();
        let re: number [] = [arr[0]];
        for (let i: number = 1; i < arr.length; i++) {
            if (arr[i] !== re[re.length - 1]) {
                re.push(arr[i])
            }
        }
        return re;*/

        arr.sort();
        let re:number[] = [arr[0]];
        for (let i : number = 1; i < arr.length; i++) {
            if(arr[i]!== re[re.length -1]) {
                re.push(arr[i])
            }
        }
        return re;
    }
}

export default Unique;