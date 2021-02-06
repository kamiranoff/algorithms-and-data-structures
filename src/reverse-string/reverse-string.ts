// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// export function reverse(str: String) {
//     return str.split('').reverse().join('');
// }

// Solution 2
// export function reverse(str: String) {
//     let reversedString = ''
//
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedString += str.split('')[i];
//     }
//
//     return reversedString;
// }

// Solution 3
export function reverse(str: string): string {
    return str.split('').reduce((acc, cur) => cur + acc, '');
}
