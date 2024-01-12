class Nodex {
  constructor(value, node) {
    this.value = value;
    this.next = node;
  }
}

export class LinkedList {
  constructor(headValue) {
    this.head = new Nodex(headValue, null);
  }

  getHead() {
    return this.head;
  }

  insert(val) {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = new Nodex(val, null);
  }

  print() {
    let current = this.head;
    while (current.next) {
      console.log(current.value);
      current = current.next;
    }
    console.log(current.value);
  }

  deleteByValue(valueToDelete) {
    let current = this.head;

    while (current && current.next) {
      if (current.next.value === valueToDelete) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }
}

export default function test() {
  const list = new LinkedList(5);
  list.insert(5);
  list.insert(9);
  list.insert(60);
  list.insert(9);
  list.insert(9);
  list.insert(88);
  list.insert(7);

  list.deleteByValue(9);

  list.print();
}

console.log("test", test());
