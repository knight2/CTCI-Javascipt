// List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
// at each depth (e.g., if you have a tree with depth 0, you' ll have 0 linked lists).


let BST = require('./BST');
let LinkedList = require('./LinkedList');
let Queue = require('./Queue');

var listOfDepths = function(bst) {
  var listOfLists = [];
  var list = null;
  var newNode;
  var q = new Queue();
  var nextq = new Queue();
  var currNode = bst;

  q.add(currNode);
  while (!q.isEmpty()) {
    currNode = q.remove();
    newNode = new LinkedList(currNode.value);
    newNode.next = list;
    list = newNode;
    if (currNode.left !== null) {
      nextq.add(currNode.left);
    }
    if (currNode.right !== null) {
      nextq.add(currNode.right);
    }
    if (q.isEmpty()) {
      listOfLists.push(list);
      list = null;
      q = nextq;
      nextq = new Queue();
    }
  }
  return listOfLists;
};


var tree = new BST(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

console.log(listOfDepths(tree));
