// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// [1,2,3,4]
// [4,3,2,1]
// 5
// [5,4,3,2,1]

import { Stack } from './stack';

export class Queue<T> {
    private readonly stack: Stack<T>;
    private readonly queueFStack: Stack<T>;

    constructor() {
        this.stack = new Stack();
        this.queueFStack = new Stack();
    }

    add(value: T): void {
        this.stack.push(value);
    }

    remove(): T | undefined {
        while (this.stack.peek() !== undefined) {
            this.queueFStack.push(this.stack.pop()!);
        }
        const removedValue = this.queueFStack.pop();

        while (this.queueFStack.peek() !== undefined) {
            this.stack.push(this.queueFStack.pop()!);
        }
        return removedValue;
    }

    peek(): T | undefined {
        let val;
        while (this.stack.peek()) {
            val = this.stack.pop();
            this.queueFStack.push(val!);
        }
        while (this.queueFStack.peek()) {
            this.stack.push(this.queueFStack.pop()!);
        }

        return val;
    }
}
