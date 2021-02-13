// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

export class Queue<T> {
    private readonly array: T[];

    constructor() {
        this.array = [];
    }

    add(value: T): void {
        this.array.unshift(value);
    }

    remove(): T | undefined {
        return this.array.pop();
    }

    peek(): T | undefined {
        if (!this.array.length) {
            return undefined;
        }
        return this.array[this.array.length - 1];
    }
}
