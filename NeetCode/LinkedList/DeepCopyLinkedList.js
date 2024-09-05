// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
  /**
   * @param {Node} head
   * @return {Node}
   */
  copyRandomList(head) {
    const copy = new Map()
    copy.set(null, null)

    let current = head
    while(current) {
      let node = new Node(current.val)
      copy.set(current, node)
      current = current.next
    }

    current = head
    while(current) {
      const node = copy.get(current)
      node.next = copy.get(current.next)
      node.random = copy.get(current.random)
      current = current.next
    }

    return copy.get(head)
  }

  copyRandomList_space(head) {
    if(!head) return null

    let current = head

    while(current) {
      let node = new Node(current.val, current.next)
      current.next = node
      node.next = node.next
      current = node.next
    }

    current = head

    while(current) {
      if(current.random) { //check without this.
        current.next.random = current.random.next
      }
      current = current.next.next
    }

    current = head
    let newCurrent = current.next
    let newHead = newCurrent

    while(current) {
      current.next = newCurrent.next
      current = current.next
      if(current) {
        newCurrent.next = current.next
        newCurrent = newCurrent.next
      }
    }

    return newHead

  }
}
