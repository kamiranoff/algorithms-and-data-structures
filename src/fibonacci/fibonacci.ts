// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution 1
// export function fibonacci(n: number): number {
//     const fibArr: number[] = [];
//     for (let i = 0; i <= n; i++) {
//         if (i === 0 || i === 1) {
//             fibArr[i] = i;
//         } else {
//             fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
//         }
//     }
//
//     return fibArr[n];
// }

// // Solution 2
// export function fibonacci(n: number): number {
//     if (n < 2) {
//         return n;
//     }
//
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// Solution 3
function slowFibonacci(n: number): number {
    if (n < 2) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function memoize<T extends string | number, R>(fn: (args: T) => R): (args: T) => R {
    const cache: { [key: string]: R } = {};
    return function (this: unknown, ...args): R {
        if (cache[args.toString()]) {
            return cache[args.toString()];
        }

        const result = fn.apply(this, args);
        cache[args.toString()] = result;
        return result;
    };
}

export const fibonacci = memoize(slowFibonacci);
