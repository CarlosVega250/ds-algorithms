import { LinkedList } from "../DS/index.js";
// Write code to remove duplicates from an unsorted list

const list = new LinkedList(5);
list.insert(5);
list.insert(9);
list.insert(60);
list.insert(9);
list.insert(88);
list.insert(7);

export function removeDuplicates() {
  debugger;
  const map = new Map();

  let current = list.getHead();

  map.set(current.value);

  while (current && current.next) {
    if (map.has(current.next.value)) {
      current.next = current.next.next;
    } else {
      map.set(current.next.value);
      current = current.next;
    }
  }
  console.log("map", map);
}
