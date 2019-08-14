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
    let l3 = new ListNode();
    let head = l3;
    while(l1 !== null && l2 !== null){
        if (l1.val > l2.val){
            l3.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        else if (l1.val < l2.val){
            l3.next = new ListNode(l1.val);
            l1 = l1.next;
        }
        else {
            l3.next = new ListNode(l1.val);
            l1 = l1.next;
            l3 = l3. next
            l3.next = new ListNode(l2.val);
            l2 = l2.next;
            
        }
        l3 = l3.next;
    }
    if (l2 == null){
        l3.next = l1;
    }
    else {
        l3.next = l2;
    }
    return head.next
    
};