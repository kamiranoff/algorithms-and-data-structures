import { steps } from './steps';

describe('steps', () => {
    test('steps is a function', () => {
        expect(typeof steps).toEqual('function');
    });

    test('steps called with n = 1', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => null);
        steps(1);
        expect(spy.mock.calls[0][0]).toEqual('#');
        expect(spy.mock.calls.length).toEqual(1);
        spy.mockClear();
    });

    test('steps called with n = 2', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => null);
        steps(2);
        expect(spy.mock.calls[0][0]).toEqual('# ');
        expect(spy.mock.calls[1][0]).toEqual('##');
        expect(spy.mock.calls.length).toEqual(2);
        spy.mockClear();
    });

    test('steps called with n = 3', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => null);
        steps(3);
        expect(spy.mock.calls[0][0]).toEqual('#  ');
        expect(spy.mock.calls[1][0]).toEqual('## ');
        expect(spy.mock.calls[2][0]).toEqual('###');
        expect(spy.mock.calls.length).toEqual(3);
        spy.mockClear();
    });
});
