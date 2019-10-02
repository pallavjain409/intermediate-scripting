var deleteDuplicates = function (head) {
    if (head == null) {
        return head
    }
    console.log(ll)
    let prev = head;
    let curr = head.next;
    while (curr) {
        if (curr.val == prev.val) {
            prev.next = curr.next;
            curr = prev.next;
        } else {
            prev = prev.next;
            curr = curr.next;
        }
    }

    return head
};

