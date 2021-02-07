// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 1
// export function capitalize(str: string): string {
//     const strArr = str.split(' ');
//     return strArr.map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ');
// }

// Solution 2
export function capitalize(str: string): string {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            result = str[0].toUpperCase();
        } else if (i > 0 && str[i - 1] === ' ') {
            result = result + str[i].toUpperCase();
        } else {
            result = result + str[i];
        }
    }

    return result;
}
