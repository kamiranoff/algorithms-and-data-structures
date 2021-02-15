// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document
import { Node } from './Node';

export class LinkedList<T> {
    public head: Node<T> | null;
    private nodes: Node<T>[];

    constructor() {
        this.head = null;
        this.nodes = [];
    }

    insertFirst(data: T): void {
        let next: Node<T> | null = null;
        if (this.nodes.length) {
            next = this.nodes[0];
        }
        const node = new Node(data, next);
        this.nodes = [node, ...this.nodes];
        this.head = this.nodes[0];
    }

    size(): number {
        return this.nodes.length;
    }

    getFirst(): Node<T> | undefined {
        return this.nodes[0] || null;
    }

    getLast(): Node<T> | undefined {
        return this.nodes[this.nodes.length - 1] || null;
    }

    clear(): void {
        this.nodes = [];
        this.head = null;
    }

    removeFirst(): void {
        this.nodes = this.nodes.slice(1);
        this.head = this.nodes[0] || null;
    }

    removeLast(): void {
        this.nodes.pop();
        if (!this.nodes.length) {
            this.head = null;
        }
    }

    insertLast(data: T): void {
        const next = this.nodes[this.nodes.length - 1] || null;
        this.nodes.push(new Node<T>(data, next));
    }

    getAt(index: number): Node<T> | undefined {
        return this.nodes[index] || null;
    }

    removeAt(index: number): void {
        if (this.getAt(index)) {
            this.nodes.splice(index, 1);
        }
    }

    insertAt(data: T, index: number): void {
        const next = this.nodes[index];
        this.nodes.splice(index, 0, new Node<T>(data, next));
    }

    forEach(fn: (value: Node<T>, index: number, array: Node<T>[]) => void): void {
        this.nodes.forEach(fn);
    }

    [Symbol.iterator](): Iterator<Node<T>> {
        return this.nodes.values();
    }
}
