// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document
import { Node } from './Node';

export class LinkedList<T> {
    public head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    insertFirst(data: T): void {
        this.head = new Node(data, this.head);
    }

    size(): number {
        let counter = 0;
        let tmpHead = this.head;

        while (tmpHead) {
            counter++;
            tmpHead = tmpHead.next || null;
        }
        return counter;
    }

    getFirst(): Node<T> | null {
        return this.head;
    }

    getLast(): Node<T> | null {
        let last = this.head;

        if (!last) {
            return null;
        }

        while (last) {
            if (!last.next) {
                return last;
            }
            last = last.next;
        }

        return null;
    }

    clear(): void {
        this.head = null;
    }

    removeFirst(): void {
        this.head = this.head?.next || null;
    }

    removeLast(): void {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }
        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data: T): void {
        const newNode = new Node(data, null);
        const last = this.getLast();
        if (!last) {
            this.head = newNode;
            return;
        }
        last.next = newNode;
    }

    getAt(index: number): Node<T> | null {
        let node = this.head;

        if (!node) {
            return null;
        }

        for (let i = 0; i < index; i++) {
            if (node) {
                node = node?.next || null;
            }
        }
        return node;
    }

    removeAt(index: number): void {
        if (index === 0 && this.head?.next) {
            this.head = this.head.next;
        }

        const previous = this.getAt(index - 1);
        let node = this.getAt(index);

        if (!previous) {
            return;
        }

        if (previous && node && !node.next) {
            previous.next = null;
            node = null;
            return;
        }

        if (previous && node && node.next) {
            previous.next = node.next;
            return;
        }
    }

    insertAt(data: T, index: number): void {
        const newNode = new Node(data, null);

        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        let node = this.getAt(index);
        const previousNode = this.getAt(index - 1);

        if (!node && !previousNode) {
            this.insertLast(data);
            return;
        }

        if (!node) {
            node = this.getLast();

            if (!node) {
                this.insertLast(data);
                return;
            }
        }

        if (previousNode) {
            previousNode.next = newNode;
            newNode.next = node;
        }
    }

    forEach(fn: (value: Node<T>) => void): void {
        let node = this.head;
        while (node) {
            fn(node);
            node = node.next || null;
        }
    }

    *[Symbol.iterator](): Iterator<Node<T>> {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next || null;
        }
    }
}
