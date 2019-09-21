export class Element {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

export class List {
  constructor (list) {
    this.length = 0;
    this.head = null;
    if (list) {
      list.forEach((num) => {
        const elem = new Element(num);
        this.add(elem);
      })
    }
  }

  add (element) {
    if (this.length === 0) {
      this.head = element;
    } else {
      let temp = this.head;
      this.head = element;
      this.head.next = temp;
    }
    this.length++;
  }

  toArray () {
    if (!this.head) return [];
    let temp = this.head;
    let arr = [temp.value];
    while (temp.next) {
      arr.push(temp.next.value);
      temp = temp.next;
    }
    return arr
  }

  reverse () {
    let curr = this.head;
    let prev = null;
    let next = null;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    return this;
  }
}
