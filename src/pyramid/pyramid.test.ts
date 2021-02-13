import { pyramid } from './pyramid';

describe('pyramid', () => {
    test('pyramid is a function', () => {
        expect(typeof pyramid).toEqual('function');
    });

    test('prints a pryamid for n = 2', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => null);
        pyramid(2);
        expect(spy.mock.calls[0][0]).toEqual(' # ');
        expect(spy.mock.calls[1][0]).toEqual('###');
        expect(spy.mock.calls.length).toEqual(2);
        spy.mockClear();
    });

    test('prints a pryamid for n = 3', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => null);
        pyramid(3);
        expect(spy.mock.calls[0][0]).toEqual('  #  ');
        expect(spy.mock.calls[1][0]).toEqual(' ### ');
        expect(spy.mock.calls[2][0]).toEqual('#####');
        expect(spy.mock.calls.length).toEqual(3);
        spy.mockClear();
    });

    test('prints a pryamid for n = 4', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => null);
        pyramid(4);
        expect(spy.mock.calls[0][0]).toEqual('   #   ');
        expect(spy.mock.calls[1][0]).toEqual('  ###  ');
        expect(spy.mock.calls[2][0]).toEqual(' ##### ');
        expect(spy.mock.calls[3][0]).toEqual('#######');
        expect(spy.mock.calls.length).toEqual(4);
        spy.mockClear();
    });
});
