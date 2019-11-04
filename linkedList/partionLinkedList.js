/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (head == null || head.next == null) {
        return head
    }
    let smallHead = {};
    let largeHead = {};
    let small = smallHead;
    let large = largeHead;
    let curr = head;
    while (curr) {
        if (curr.val < x) {
            small.next = new ListNode(curr.val);
            small = small.next;
        } else {
            large.next = new ListNode(curr.val);
            large = large.next;
        }
        curr = curr.next;
    }
    small.next = largeHead.next

    return smallHead.next;
};