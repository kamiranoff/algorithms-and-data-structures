// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// const makeMap = (val: string): { [key: string]: number } =>
//     val.split('').reduce<{ [key: string]: number }>((acc: { [key: string]: number }, curr: string): {
//         [key: string]: number;
//     } => {
//         if (acc[curr]) {
//             return {
//                 ...acc,
//                 [curr]: acc[curr] + 1
//             };
//         }
//         return {
//             ...acc,
//             [curr]: 1
//         };
//     }, {});

// Solution 1
// export function anagrams(stringA: string, stringB: string): boolean {
//     const cleanStringA = stringA.replace(/[^\w]/g, "").toLocaleLowerCase();
//     const cleanStringB = stringB.replace(/[^\w]/g, "").toLocaleLowerCase();
//
//     if (cleanStringA.length !== cleanStringB.length) {
//         return false;
//     }
//
//     const stringMapA = makeMap(cleanStringA);
//
//     for (const char in stringMapA) {
//         if (Object.prototype.hasOwnProperty.call(stringMapA, char)) {
//             const el = cleanStringB.split("").find(el => el === char);
//             if (!el) {
//                 return false;
//             }
//             return stringMapA[char] === el.length;
//         }
//     }
//
//     return false;
// }

// Solution 2
// export function anagrams(stringA: string, stringB: string): boolean {
//     const aCharMap = makeMap(stringA);
//     const bCharMap = makeMap(stringB);
//
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }
//
//     for (const char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }
//
//     return true;
// }

// Solution 3
export function anagrams(stringA: string, stringB: string): boolean {
    const cleanStringA = stringA.replace(/[^\w]/g, '').toLocaleLowerCase().split('').sort().join('');
    const cleanStringB = stringB.replace(/[^\w]/g, '').toLocaleLowerCase().split('').sort().join('');

    return cleanStringA === cleanStringB;
}
