/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2019-01-24 14:49
 */

import {sum} from './sum';

test('adds 1 + 2 equal 3',  ()=> {
    expect(sum(1,2)).toBe(3)
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});