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
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {
    let dummy = new ListNode(-1)
    let current = dummy
    let left = list1
    let right = list2

    while(left && right) {
      if(left.val <= right.val) {
        current.next = left
        left = left.next
      } else {
        current.next = right
        right = right.next
      }
      current = current.next
    }

    if(left) {
      current.next = left
    }

    if(right) {
      current.next = right
    }

    return dummy.next
  }
}
