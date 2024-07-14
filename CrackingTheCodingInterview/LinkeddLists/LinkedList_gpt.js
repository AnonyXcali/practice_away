class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.length += 1;
  }

  remove(element) {
    let current = this.head;

    if (current) {
      if (current.value === element) {
        this.head = current.next;
        this.length -= 1;
        return this.head;
      }

      while (current.next) {
        if (current.next.value === element) {
          current.next = current.next.next;
          this.length -= 1;
          return this.head;
        }
        current = current.next;
      }
    }
    return this.head;
  }

  removeAtPos(k) {
    if (!this.head) return null;

    if (k === 0) {
      this.head = this.head.next;
      this.length -= 1;
      return this.head;
    }

    let curr = this.head;
    let currentIndexCount = 0;

    while (curr) {
      if (currentIndexCount + 1 === k) {
        if (curr.next) {
          curr.next = curr.next.next;
          this.length -= 1;
        }
        return this.head;
      }
      curr = curr.next;
      currentIndexCount += 1;
    }

    return this.head;
  }

  insert(ele, k) {
    const node = new Node(ele);

    if (k === 0) {
      node.next = this.head;
      this.head = node;
      this.length += 1;
      return this.head;
    }

    let curr = this.head;
    let pos = 0;

    while (curr) {
      if (pos + 1 === k) {
        node.next = curr.next;
        curr.next = node;
        this.length += 1;
        return this.head;
      }
      curr = curr.next;
      pos += 1;
    }

    // If k is out of bounds, add to the end
    this.add(ele);

    return this.head;
  }

  count() {
    return this.length;
  }
}
