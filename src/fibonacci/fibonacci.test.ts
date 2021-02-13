import { fibonacci } from './fibonacci';

describe('Fibonacci', () => {
    test('Fibonacci function is defined', () => {
        expect(typeof fibonacci).toEqual('function');
    });

    test('calculates correct fib value for 1', () => {
        expect(fibonacci(1)).toEqual(1);
    });

    test('calculates correct fib value for 2', () => {
        expect(fibonacci(2)).toEqual(1);
    });

    test('calculates correct fib value for 3', () => {
        expect(fibonacci(3)).toEqual(2);
    });

    test('calculates correct fib value for 4', () => {
        expect(fibonacci(4)).toEqual(3);
    });

    test('calculates correct fib value for 15', () => {
        expect(fibonacci(39)).toEqual(63245986);
    });
});
