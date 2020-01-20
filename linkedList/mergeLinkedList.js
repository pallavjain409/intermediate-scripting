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
var mergeTwoLists = function (l1, l2) {
    let list = new ListNode();
    head = list;

    function merge(l1, l2) {
        if (!l1) {
            head.next = l2;
            return list.next;
        } else if (!l2) {
            head.next = l1;
            return list.next;
        } else if (l1.val < l2.val) {
            let newNode = new ListNode(l1.val);
            head.next = newNode;
            l1 = l1.next;
            head = head.next;
            return merge(l1, l2)
        } else {
            let newNode = new ListNode(l2.val);
            head.next = newNode;
            l2 = l2.next;
            head = head.next;
            return merge(l1, l2)
        }
    }
    return merge(l1, l2)
};