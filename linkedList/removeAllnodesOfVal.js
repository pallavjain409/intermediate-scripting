var removeElements = function (head, val) {
    while (head !== null && head.val == val) {
        head = head.next
    }
    if (head != null && head.next != null) {
        let curr = head.next;
        let prev = head;
        while (curr !== null) {
            if (curr.val == val) {

                curr = curr.next;
                prev.next = curr;
            } else {
                curr = curr.next;
                prev = prev.next;
            }
        }
    }
    return head;
};