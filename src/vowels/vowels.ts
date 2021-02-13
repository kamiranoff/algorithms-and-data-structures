// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1
// export function vowels(str: string): number {
//     return str.split('').filter(v => ['a', 'e', 'i', 'o', 'u'].includes(v.toLowerCase())).length || 0;
// }

//solution 2
export function vowels(str: string): number {
    // [] contain character inside
    // g: don't stop at first match
    // i: insensitive case
    return str.match(/[aeiou]/gi)?.length || 0;
}
