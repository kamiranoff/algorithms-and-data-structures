// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'
//
import { Queue } from './queue';

export function weave<T1, T2>(sourceOne: Queue<T1>, sourceTwo: Queue<T2>): Queue<T1 | T2> {
    const q = new Queue<T1 | T2>();

    while (sourceOne.peek() !== undefined || sourceTwo.peek() !== undefined) {
        const valueOne = sourceOne.remove();
        if (valueOne !== undefined) {
            q.add(valueOne);
        }

        const valueTwo = sourceTwo.remove();
        if (valueTwo !== undefined) {
            q.add(valueTwo);
        }
    }
    return q;
}
