// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// solution 1
// export function fizzBuzz(nbr: number): void {
//     for (let i = 1; i <= nbr; i++) {
//         if (i % 5 === 0 && i % 3 === 0) {
//             console.log('fizzbuzz');
//         } else if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }

// solution 2
export function fizzBuzz(nbr: number): void {
    for (let i = 1; i <= nbr; i++) {
        let print = '';

        if (i % 3 === 0) {
            print += 'fizz';
        }

        if (i % 5 === 0) {
            print += 'buzz';
        }

        console.log(print || i);
    }
}
