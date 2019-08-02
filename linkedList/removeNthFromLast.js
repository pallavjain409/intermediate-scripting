
var removeNthFromEnd = function(head, n) { 
    
    let length = getLength(head);
    if (length == 1){
        return null;
    }
    else if(n >= length){
            return removeHead(head);
    }
    let nFromStarting = length - n;
  return removeNthNode(head, nFromStarting);
    };


function getLength(head){
    let count = 0;
    while(head){
        head = head.next;
        count++;
    }
    return count;
}


function removeNthNode(head ,n){
    let previousNode = null;
    let currentNode = head;
    while(n){
        previousNode = currentNode;
        currentNode = currentNode.next;
        n--;
    }
    previousNode.next = currentNode.next;
    return head;
}
function removeHead(head){
    head = head.next;
    return head;
}