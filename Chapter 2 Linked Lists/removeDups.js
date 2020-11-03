//Remove duplicates from an unsorted linked list

const LinkedList = require("../Chapter 2 Linked Lists/util/LinkedListX");


function removeDuplicates(list){
    const _set = new Set();
    let cur = list.head;
    let prev = null;
    while (cur){
        if (_set.has(cur.value)){
            //duplicate has been foudn
            //remove it from list 
            //cur goes to next but prev stays same
            let elem = cur;
            prev.next = cur.next;
            cur = cur.next;
            elem.next = null;
        }
        else{

            //add to set
            _set.add(cur.value);
            prev = cur;
            cur = cur.next;
        }
    }
    return list;
}

let list = new LinkedList();
for (let elem of [1,5,1,6,8,6,8,8,8]){
    list.append(elem);
};

console.log(list._toArray());
removeDuplicates(list);
console.log(list._toArray());
