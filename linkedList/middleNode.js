/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let lengthOfLinkedList = getLength(head);
    // if (!lengthOfLinkedList){
    //     return;
    // }
    let middle = Math.floor(lengthOfLinkedList/2);
    let currentNode = head;
    while (middle){
        currentNode = currentNode.next;
        middle--;
    }
    return currentNode;
};
function getLength(head){
    let length = 0;
    while(head){
        head = head.next;
        length++;
    }
    return length
}