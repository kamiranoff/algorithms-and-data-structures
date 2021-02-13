// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

export function pyramid(n: number): void {
    const pound = '#';
    const space = ' ';
    for (let i = n; i > 0; i--) {
        let line = '';
        for (let j = 0; j < i - 1; j++) {
            line += space;
        }
        for (let j = 0; j < (n - i + 1) * 2 - 1; j++) {
            line += pound;
        }
        for (let j = 0; j < i - 1; j++) {
            line += space;
        }
        console.log(line);
    }
}
