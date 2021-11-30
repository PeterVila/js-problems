// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.Return the linked list sorted as well.

var deleteDuplicates = function (head) {
    let current = head
    if (!current) {
        return head;
    }
    while (current.next !== null) {
        let nextNode = current.next;
        if (current.val === nextNode.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head;
};

//Test Case: Input: head = [1,1,2,3,3]
// Output: [1, 2, 3]
// make a variable, currentNode to keep track
// while loop, go through the list as long as head.next !== null
// Set the next value to a variable
// if current.val === next.val, then go to the next next value.
//otherwise, set the current to the next val