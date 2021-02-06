// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// solution 1;
// export function maxChar(str: string): string {
//     const strArr = str.split("");
//     const strMap: Record<string, number> = {};
//
//     for (const char of strArr) {
//         if (strMap[char]) {
//             strMap[char] += 1;
//         }
//
//         strMap[char] = 1;
//     }
//
//     const max = Math.max(...Object.values(strMap));
//
//     for (const [key, value] of Object.entries(strMap)) {
//         if (value === max) {
//             return key;
//         }
//     }
//
//     return "Error";
// }

// solution 2
export function maxChar(str: string): string {
    const strArr = str.split('');
    const strMap: Record<string, number> = {};

    for (const char of strArr) {
        if (strMap[char]) {
            strMap[char] += 1;
        }

        strMap[char] = 1;
    }

    let max = 0;
    let maxKey = '';
    for (const key in strMap) {
        if (Object.prototype.hasOwnProperty.call(strMap, key) && strMap[key] > max) {
            max = strMap[key];
            maxKey = key;
        }
    }

    return maxKey;
}
