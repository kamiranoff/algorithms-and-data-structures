import { LinkedList } from '../linked-list/linked-list';
import { Node } from '../linked-list/Node';

export function midpoint<T>(list: LinkedList<T>): Node<T> | null {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast?.next && fast.next.next) {
        slow = slow?.next || null;
        fast = fast.next.next;
    }

    return slow;
}
