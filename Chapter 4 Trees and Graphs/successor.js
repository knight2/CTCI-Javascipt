// Successor: Write an algorithm to find the "next" node (i .e ., in-order successor ) of a given node in a
// binary search tree. You may assume that each node has a link to its parent

let BSTp = function(value){
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
};

let findSuccessor = function(node){
    let successor = null;
    if (node.right !== null){
        successor = node.right;
        while(successor.left !== null){
            successor = successor.left;
        }
    } else if (node.parent !== null){
        let currNode = node;
        while(currNode.parent !== null){
            if(currNode.parent.left === currNode){
                successor= currNode.parent;
            }
            currNode = currNode.parent;
        }
    }
    return successor;
}

var a = new BSTp(10);
var b = new BSTp(2);
var c = new BSTp(3);
var d = new BSTp(4);
var e = new BSTp(6);
var f = new BSTp(5);
var g = new BSTp(7);

a.left = b; b.parent = a;
b.right = c; c.parent = b;
c.right = d; d.parent = c;
d.right = e; e.parent = d;
e.left = f; f.parent = e;
e.right = g; g.parent = e;


console.log(findSuccessor(f).value, 6);
console.log(findSuccessor(g).value, 10);
