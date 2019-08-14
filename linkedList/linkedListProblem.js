
//   Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  

// /**
//  * @param {ListNode} headA
//  * @param {ListNode} headB
//  * @return {ListNode}
//  */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null){
        return null
    }
    let headALength = getLinkedListLength(headA);
    let headBLength = getLinkedListLength(headB);
    if (headALength > headBLength){
       headA =  getNthNode(headA, headALength - headBLength);
       }  
    else{
         headB = getNthNode(headB, headBLength - headALength);
        }
    while(headA){
        if(headA === headB){
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null;    
};

function getLinkedListLength(linkedList){
    let length = 0;
    while(linkedList){
        linkedList =  linkedList.next ;
        length++;
    }
    return length;
}

function  getNthNode(node, n){
    while (n){
        node = node.next;
        n--;
    } 
    return node;
    
}