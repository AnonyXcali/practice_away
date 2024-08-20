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
   * @return {void}
   */
  reorderList(head) {
    let slow = head
    let fast = head.next

    //finding the mid pointer

    while(fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
    }

    let second = slow.next
    let prev = null
    slow.next = null

    //reversing 2nd half of the list
    while(second) {
      let temp = second.next
      second.next = prev
      prev = second
      second = temp
    }

    let first = head
    second = prev

    while(second) {
      let temp1 = first.next
      let temp2 = second.next

      first.next = second
      second.next = temp1

      first = temp1
      second = temp2
    }

    return head

  }
}
