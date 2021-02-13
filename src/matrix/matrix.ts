// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//     [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
//     m[0][0] m[0][1] m[0][2]
//     m[1][2] m [2, 2]
//     m[2,0] m[2,1]
//     m[1,0] m[1,1]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
// 1 -> [0][0] [0][1] [0][2] [0][3]
// 2 -> [1][3] [2][3][3][3]
// 3 -> [3][2] [3][1] [3][0]
// 4 -> [2][0] [1] [0]
// 5 -> [1] [1] [1][2]
// 6 -> [2][2]
// 7 -> [2][1]
export function matrix(n: number): number[][] {
    const results: number[][] = [];
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    let counter = 1;

    for (let i = 0; i < n; i++) {
        results[i] = [];
    }

    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    return results;
}
