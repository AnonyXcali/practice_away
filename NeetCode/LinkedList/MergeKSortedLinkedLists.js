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
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists_recursive(lists) {
    console.log(lists)
    if(!lists || lists.length === 0) {
      return null
    }

    if(lists.length === 1) {
      return lists[0]
    }

    if(lists.length > 1) {
      let left = lists[0]
      let right = lists[1]
      let node = new ListNode(-1)
      let newHead = node
      let current = node

      while(left && right) {
        if(left.val < right.val) {
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

      if(lists.length > 2) {
        let newList = [newHead.next, ...lists.slice(2, lists.length)]
        return this.mergeKLists(newList)
      } else {
        return this.mergeKLists([newHead.next])
      }
    }
  }

  mergeKLists(lists) {
    if(!lists || lists.length === 0) return null

    while(lists.length > 1) {
      let mergedList = []
      for(let i = 0; i < lists.length; i += 2) {
        let l1 = lists[i]
        let l2 = i + 1 < lists.length ? lists[i + 1] : null

        mergedList.push(this.merge(l1, l2))
      }
      lists = mergedList
    }
    return lists[0]
  }

  merge(l1, l2) {
    let node = new ListNode(-1)
    let current = node
    while(l1 && l2) {
      if(l1.val < l2.val) {
        current.next = l1
        l1 = l1.next
      } else {
        current.next = l2
        l2 = l2.next
      }
      current = current.next
    }

    if(l1) {
      current.next = l1
    }

    if(l2) {
      current.next = l2
    }
    
    return node.next
  }
}
