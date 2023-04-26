//https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */ 

 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

 class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;
let node3 = new ListNode(3);
node2.next = node3;

let list = new LinkedList(node1);

console.log('list', list);

while (list.head) {
	console.log('log', list.head.val);
  list.head = list.head.next;
}


/* var mergeTwoLists = function(list1, list2) {
        
    while (list1) {
        console.log('list 1', list1);
        list1
    }
    
}; */






//https://leetcode.com/problems/merge-two-sorted-lists/discuss/341711/Clean-Javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  let list = new ListNode()
  let head = list
  
  while (l1 !== null && l2 !== null) {

  // Select the smallest value from either linked list,
  // then increment that list forward.
      if (l1.val < l2.val) {
          list.next = new ListNode(l1.val)
          l1 = l1.next
      } else {
          list.next = new ListNode(l2.val)
          l2 = l2.next
      }
      
      list = list.next
  }
  
// It's possible that one linked list is shorter than the other so we just
// add on the remainder of the last linked list. It's already sorted :)
  if (l1 !== null)
      list.next = l1
  if (l2 !== null)
      list.next = l2
  
// return .next because this first element in the linkedlist is empty
  return head.next
};