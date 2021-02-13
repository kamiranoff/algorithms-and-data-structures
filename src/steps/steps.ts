// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// solution 1
export function steps(n: number): void {
    const pound = '#';
    const space = ' ';
    for (let i = 1; i <= n; i++) {
        console.log(pound.repeat(i) + space.repeat(n - i));
    }
}

// // solution 2
// export function steps(n: number): void {
//     const pound = '#';
//     const space = ' ';
//     for (let i = 1; i <= n; i++) {
//         let poundLine = '';
//         let spaceLine = '';
//         for (let j = 0; j < i; j++) {
//             poundLine += pound;
//         }
//         for (let j = 0; j < n - i; j++) {
//             spaceLine += space;
//         }
//         console.log(`${poundLine}${spaceLine}`);
//     }
// }

// solution 3
// export function steps(n: number): void {
//     for (let i = 0; i < n; i++) {
//         let stair = '';
//         for (let column = 0; column < n; column++) {
//             if (column <= i) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//
//         console.log(stair);
//     }
// }

// solution 4 -- recursion @TODO
