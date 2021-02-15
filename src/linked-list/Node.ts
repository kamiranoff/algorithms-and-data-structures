export class Node<T> {
    public data: T;
    public readonly next?: Node<T> | null;

    constructor(data: T, next: Node<T> | null) {
        this.data = data;
        this.next = next;
    }
}
