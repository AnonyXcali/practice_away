/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @param {number} k
   * @return {ListNode}
   */
  reverseKGroup(head, k) {
    const dummy = new ListNode(0, head)
    let groupPrev = dummy
    while(true) {
      const kth = this.getKth(groupPrev, k)
      if(!kth) {
        break
      }
      
      const groupNext = kth.next

      let prev = kth.next //which can be null
      let curr = groupPrev.next

      while(curr !== groupNext) {
        const tmp = curr.next
        curr.next = prev
        prev = curr
        curr = tmp
      }

      const tmp = groupPrev.next
      groupPrev.next = kth
      groupPrev = tmp
    }

    return dummy.next
  }

  getKth(curr, k) {
    while(curr && k > 0) {
      curr = curr.next
      k--
    }

    return curr
  }

  reverse(list) {
    let current = list
    let prev = null

    while(current) {
      let temp = current.next
      current.next = prev
      prev = current
      current = temp
    }

    list = prev
    return list
  }
}
