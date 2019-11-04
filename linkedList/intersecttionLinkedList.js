/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (headA == null || headB == null) {
        return null;
    }
    let headAlength = headA.length();
    let headBlength = headB.length();
    let diff = headAlength - headBlength;
    headA = headA.forward(diff);
    headB = headB.forward(-diff);
    let currA = headA;
    let currB = headB;
    while (currA) {
        if (currA == currB) {
            return currA
        }
        currA = currA.next;
        currB = currB.next;
    }
    return null;

};