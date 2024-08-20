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
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    let prev = null
    let current = head

    while(current) {
      let temp = current.next
      current.next = prev
      prev = current
      current = temp
    }

    //set the head as prev
    head = prev

    //deletion from the reversed list
    let count = 1
    current = head

    while(current) {
      if(n === 1) {
        head = current.next
        break
      }
      
      if(count + 1 === n) {
        current.next = current.next.next
        break
      }
      count += 1
      current = current.next
    }
    

    //reverse the linked list again

    prev = null
    current = head

    while(current) {
      let temp = current.next
      current.next = prev
      prev = current
      current = temp
    }

    head = prev
    return head
  }

  removeNthFromEnd_II(head, n) {
    let dummyNode = new ListNode(-1, head)
    let left = dummyNode
    let right = head

    while(n > 0) {
      right = right.next
      n -= 1
    }

    while(right) {
      left = left.next
      right = right.next
    }

    left.next = left.next.next
    head = dummyNode.next
    return head
  }

}
