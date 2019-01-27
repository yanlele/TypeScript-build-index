/**
 * create by yanle
 * create time 2019/1/27 7:55 PM
 */

describe('Setup and Teardown', function () {
    beforeEach(function () {
        console.log('beforeEach')
    });

    afterEach(function () {
        console.log('afterEach')
    });

    test('match string one', function () {
        expect('yanlele').toMatch('yan');
    });

    test('match string two', function () {
        expect('yanlele').toMatch('lele');
    })
});