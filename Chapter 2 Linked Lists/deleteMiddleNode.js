//delete node in middle of linkedlist
const LinkedList = require("../Chapter 2 Linked Lists/util/LinkedListX");

let deleteMiddleNode = function(node){
    if (node !== null && node.next !== null){
        node.value = node.next.value;
        node.next = node.next.next;
    }
};

let list = new LinkedList();
for (let item of [1,2,3,4,5,6]){
    list.append(item);
}

console.log(list._toArray());
deleteMiddleNode(list.head.next);
console.log(list._toArray());