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
https://leetcode.com/problems/add-two-numbers/submissions/
var addTwoNumbers = function(l1, l2) {
    let head = null;
    let curr;
    let carry = 0;
    while(l1 || l2 || carry){
        let sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0)  + carry;
        let value = sum % 10;
        carry = Math.floor(sum / 10);
        let newNode = new ListNode(value);
        if (!head){
            head = newNode;
            curr = head;
        }
        else {
            curr.next = newNode;
            curr = curr.next;
        }
        if (l1){
            l1 = l1.next;
        }
        if (l2){
            l2 = l2.next
        }
    }
    
    return head;
    
    
};

