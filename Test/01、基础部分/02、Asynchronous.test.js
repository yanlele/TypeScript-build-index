/**
 * create by yanle
 * create time 2019/1/26 11:26 PM
 * @description 异步代码的测试
 */


describe('Asynchronous', function () {
    test('async function run err', function () {
        let x = true;
        let f = function () {
            x = false;
            expect(x).toBeTruthy();
        };
        setTimeout(f, 4000);
    });

    test('async function run success', function (done) {
        let x = true;
        let f = function () {
            x = false;
            expect(x).toBeTruthy();
            done();
        };
        setTimeout(f, 4000);
    });

    test('Promise testing resolve', function () {
        let timer = +new Date();
        let flag = timer % 2 === 1 ? true : false;
        let returnPromise = function () {
            return new Promise((resolve, reject) => {
                if (flag) {
                    resolve(flag)
                } else {
                    reject(flag)
                }
            });
        };

        returnPromise();
    })
});