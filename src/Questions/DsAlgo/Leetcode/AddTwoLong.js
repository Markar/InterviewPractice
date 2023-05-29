/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  
  let num1 = '';
  let num2 = '';    
  let res = 0;

  let currentNode = l1;
  console.log('currentNode', currentNode);
  
  while (currentNode.val !== undefined) {        
      num1 += currentNode.val;       
      if (currentNode.next)
          currentNode = currentNode.next;  
      else 
          break;                
  }
  num1 = [...num1].reverse();
  
  currentNode = l2;
  while (currentNode.val !== undefined) {        
      num2 += currentNode.val;       
      if (currentNode.next)
          currentNode = currentNode.next;  
      else 
          break;                
  }
  num2 = [...num2].reverse();        
  
  let total = BigInt(num1.join('')) + BigInt(num2.join(''));    
  total = [...total.toString()].reverse();
  
  console.log('total', total);
  console.log('num1', num1);
  console.log('num2', num2);
  
  let result = [];
  
  for (let i = 0; i < total.length; i++) {
      let node = new ListNode(total[i], null);
      result.push(node);
  }        
  
  for (let i = 0; i < result.length-1; i++) {
      result[i].next = result[i+1];
  }    
  
  return result[0];
};