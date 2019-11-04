var sortedListToBST = function (head) {
    if (head == null) {
        return null;
    }
    if (head.next == null) {
        return new TreeNode(head.val)
    }
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast && fast.next) {
        prev = slow;
        fast = fast.next.next;
        slow = slow.next;
    }
    prev.next = null;

    let tree = new TreeNode(slow.val)
    tree.left = sortedListToBST(head)
    tree.right = sortedListToBST(slow.next)
    return tree
};