/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2019-01-24 14:49
 */

export function sqrt(x) {
    if (x < 0) throw new Error("负值没有平方根");
    return Math.exp(Math.log(x) / 2);
}

export function add(a, b) {
    return a + b;
}

// function test(a, b) {
//     return a % b;
// }
// console.log(test(+new Date(),2));