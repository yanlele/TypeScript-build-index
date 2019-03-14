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
        let flag = timer % 2 === 1;
        let returnPromise = function () {
            return new Promise((resolve, reject) => {
                if (flag) {
                    resolve(flag)
                } else {
                    reject(flag)
                }
            });
        };

        // 这种方式并不能非常好的拒绝测试， 因为还是会放过测试用例
        return returnPromise()
            .then(flag => {
                expect(flag).toBeTruthy();
            })
    });

    test('Promise testing reject', function () {
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

        return returnPromise()
            .catch(flag => {
                expect.assertions(1);
                expect(flag).tobeFalsy();
            })
    });

    test('Promise testing used .resolves and .rejects', function () {
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
        return expect(returnPromise()).resolves.toBeTruthy();
    });

    test('async/await testing', async function () {
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
        let result = await returnPromise();
        expect(result).toBeTruthy();
    });
});
