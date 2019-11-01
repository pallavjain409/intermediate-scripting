var isPalindrome = function (head) {
    let fast = head;
    let slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (fast != null) {
        slow = slow.next
    }
    slow = reverse(slow);
    fast = head;
    while (slow) {
        if (fast.val != slow.val) {
            return false
        }
        fast = fast.next;
        slow = slow.next;
    }
    return true

};

function reverse(head) {
    let prev = null;
    while (head != null) {
        let curr = head;
        head = head.next;
        curr.next = prev;
        prev = curr;

    }
    return prev;
}