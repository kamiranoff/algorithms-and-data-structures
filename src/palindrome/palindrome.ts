// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
// export function palindrome(str: string): boolean {
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

// Solution 2
// export function palindrome(str: string): boolean {
//     const strArr = str.split("");
//     for (let i = 0; i < strArr.length - 1; i++) {
//
//         if (i >= strArr.length / 2) {
//             return true;
//         }
//
//         if (strArr[i] !== strArr[strArr.length - 1 - i]) {
//             return false;
//         }
//     }
//
//     return true;
// }

// Improved Solution 2
export function palindrome(str: string): boolean {
    const strArr = str.split('');
    const halfStringLef = Math.floor(strArr.length / 2);

    for (let i = 0; i < halfStringLef; i++) {
        if (strArr[i] !== strArr[strArr.length - 1 - i]) {
            return false;
        }
    }

    return true;
}
