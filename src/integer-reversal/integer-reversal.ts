// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// solution 1
// export function reverseInt(n: number): number {
//     const numArr = n.toString().split("");
//     if (numArr[0] === "-") {
//         return Number([numArr[0], ...numArr.slice(1).reverse()].join(''));
//     }
//
//     return  Number(n.toString().split("").reverse().join(''));
// }

// solution 2
export function reverseInt(n: number): number {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed, 10) * Math.sign(n);
}
