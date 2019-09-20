//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor (value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
  }

  pop() {
    const value = this.tail.value;
    if (this.size > 1) {
      this.tail = this.tail.prev
      this.tail.next = null;
    } else {
      this.tail = null;
      this.head = null;
    }
    this.size -= 1;
    return value;
  }

  shift() {
    const value = this.head.value;
    if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.size -= 1;
    return value;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size += 1;
  }

  delete(value) {
    let pointer = this.head;
    do {
      if (pointer.value === value) {
        // Middle node
        if (pointer.prev && pointer.next) {
          pointer.prev.next = pointer.next;
          pointer.next.prev = pointer.prev;
        } else if (!pointer.prev) { // Head node
          this.head = pointer;
          if (this.head.prev) this.head.prev = null;
        } else if (!pointer.next) { // Tail node
          this.tail = pointer.prev;
          pointer.prev.next = this.tail;
          this.tail.next = null;
        }
        this.size -= 1;
        break;
      }
      pointer = pointer.next;
    } while (pointer);
  }

  count() {
    return this.size;
  }
}
