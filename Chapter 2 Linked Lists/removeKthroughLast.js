const LinkedList = require("../Chapter 2 Linked Lists/util/LinkedListX");

let findKtoLast = function(k, list){
    //two pointers, fast and slow
    let fast = list.head;
    let slow = list.head;

    //move fast pointer k steps in linked list
    for (let i =0; i<k; i++){
        if (fast === null) return null;//k is larger than linked list
        fast = fast.next;
    }

    //move pointers at same time, slow pointer will exit kth node from end
    while (fast !== null){
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}

let l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(4);
l.append(5);

console.log(findKtoLast(3, l));
console.log(findKtoLast(10, l));
console.log(findKtoLast(-1,l));
console.log(findKtoLast(0, l));
console.log(findKtoLast(1,l));
