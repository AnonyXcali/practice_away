/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let arr = []
  let curr = head

  while(curr) {
    arr.push(curr.val)
    curr = curr.next
  }

  let front = 0
  let tail = arr.length - 1

  while(front <= tail) {
    if(arr[front] !== arr[tail]) {
      return false
    }

    front += 1
    tail -= 1
  }

  return true
    
};