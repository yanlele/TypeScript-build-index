/**
 * create by yanle
 * create time 2019/1/26 11:16 PM
 */

import {add} from '../math'

describe('Mathers', function () {
    test('4 add 5 === 9', function () {
        expect(add(4 , 5)).toBe(9);
    });

    it('should hello', function () {
        expect(add(10 , 5)).toBe(15);
    });
});
