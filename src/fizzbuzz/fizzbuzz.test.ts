import { fizzBuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
    test('fizzBuzz function is defined', () => {
        expect(fizzBuzz).toBeDefined();
    });

    test('Calling fizzbuzz with `5` prints out 5 statements', () => {
        fizzBuzz(5);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const spy = jest.spyOn(console, 'log').mockImplementation(() => null);
        expect(spy.mock.calls.length).toEqual(5);
        spy.mockClear();
    });

    test('Calling fizzbuzz with 15 prints out the correct values', () => {
        fizzBuzz(15);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const spy = jest.spyOn(console, 'log').mockImplementation(() => null);

        expect(spy.mock.calls[0][0]).toEqual(1);
        expect(spy.mock.calls[1][0]).toEqual(2);
        expect(spy.mock.calls[2][0]).toEqual('fizz');
        expect(spy.mock.calls[3][0]).toEqual(4);
        expect(spy.mock.calls[4][0]).toEqual('buzz');
        expect(spy.mock.calls[5][0]).toEqual('fizz');
        expect(spy.mock.calls[6][0]).toEqual(7);
        expect(spy.mock.calls[7][0]).toEqual(8);
        expect(spy.mock.calls[8][0]).toEqual('fizz');
        expect(spy.mock.calls[9][0]).toEqual('buzz');
        expect(spy.mock.calls[10][0]).toEqual(11);
        expect(spy.mock.calls[11][0]).toEqual('fizz');
        expect(spy.mock.calls[12][0]).toEqual(13);
        expect(spy.mock.calls[13][0]).toEqual(14);
        expect(spy.mock.calls[14][0]).toEqual('fizzbuzz');
        spy.mockClear();
    });

    beforeEach(() => {
        jest.spyOn(console, 'log');
    });
});
