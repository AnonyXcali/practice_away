/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let dummy = new ListNode(-1, head)

  let prev = dummy


  while(head && head.next) {
    let first = head
    let second = head.next
    

    first.next = second.next
    second.next = first

    prev.next = second

    prev = first
    head = first.next
  }

  return dummy.next

};