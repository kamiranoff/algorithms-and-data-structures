// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// solution 1
// export function chunk(array: number[], size: number): number[][] {
//     const finalArray = [];
//     let chunk = [];
//     for (let i = 1; i <= array.length; i++) {
//         if (array.length - i === 0) {
//             // last element in array.
//             chunk.push(array[i - 1]);
//             finalArray.push(chunk);
//         } else if (array.length - i < array.length % size) {
//             // if last elements in array (reminders)
//             chunk.push(array[i - 1]);
//         } else if (i % size !== 0) {
//             // not a multiple of size
//             chunk.push(array[i - 1]);
//         } else if (i % size === 0) {
//             // multiple of size. stop push to local array. push to final array
//             chunk.push(array[i - 1]);
//             finalArray.push(chunk);
//             chunk = [];
//         }
//     }
//
//     return finalArray;
// }

// solution 2
// export function chunk(array: number[], size: number): number[][] {
//     let chunk = [];
//     const finalArray = [];
//
//     for (let i = 0; i < array.length; i++) {
//         chunk.push(array[i]);
//
//         if (array.length - 1 - i === 0 && chunk.length) {
//             finalArray.push(chunk);
//             return finalArray;
//         }
//
//         if (chunk.length === size) {
//             finalArray.push(chunk);
//             chunk = [];
//         }
//     }
//
//     return finalArray;
// }

// solution 3
// export function chunk(array: number[], size: number): number[][] {
//     const chunked = [];
//
//     for (const el of array) {
//         const last = chunked[chunked.length - 1];
//
//         if (!last || last.length === size) {
//             chunked.push([el]);
//         } else {
//             last.push(el);
//         }
//     }
//
//     return chunked;
// }

// solution 4
export function chunk(array: number[], size: number): number[][] {
    const finalArray = [];
    for (let i = 0; i < array.length; i = i + size) {
        const chunk = array.slice(i, i + size);
        finalArray.push(chunk);
    }

    return finalArray;
}
