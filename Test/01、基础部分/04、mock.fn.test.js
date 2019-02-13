describe('mock.fn', () => {
    test('测试jest.fn()调用', () => {
        let mockFn = jest.fn();
        mockFn(1, 2, 3);
        mockFn(1, 2, 3);
        let result = mockFn(1, 2, 3);

        // 断言mockFn的执行后返回undefined
        expect(result).toBeUndefined();
        // 断言mockFn被调用
        expect(mockFn).toBeCalled();
        // 断言mockFn被调用了一次
        expect(mockFn).toBeCalledTimes(3);
        // 断言mockFn传入的参数为1, 2, 3
        expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
    });

    test('测试jest.fn()返回固定值', () => {
        let mockFn = jest.fn().mockReturnValue('default');
        // 断言mockFn执行后返回值为default
        expect(mockFn()).toBe('default');
    });

    test('测试jest.fn()内部实现', () => {
        let mockFn = jest.fn((num1, num2) => {
            return num1 * num2;
        });
        // 断言mockFn执行后返回100
        expect(mockFn(10, 10)).toBe(100);
    });

    test('测试jest.fn()返回Promise', async () => {
        let mockFn = jest.fn().mockResolvedValue('default');
        let result = await mockFn();
        // 断言mockFn通过await关键字执行后返回值为default
        expect(result).toBe('default');
        // 断言mockFn调用后返回的是Promise对象
        expect(Object.prototype.toString.call(mockFn())).toBe("[object Promise]");
    });
});
