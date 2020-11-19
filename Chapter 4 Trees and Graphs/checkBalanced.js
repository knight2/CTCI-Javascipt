// Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of
// this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
// node never differ by more than one.

let BST = require('./BST');

let checkBalanced = function(bst){
    //case where left is null and right is not null
    if (bst.left === null & bst.right !== null){
        if(bst.right.left !== null || bst.right.right !== null){
            return false;
        }
    }
    //case where left is not null and right is null
    if (bst.left !== null & bst.right === null){
        if(bst.left.left !== null || bst.left.right !== null){
            return false;
        }
    }

    //initialize answer as true
    let answer = true;
    //if bst.left is not null, recursively call checkBalanced on bst.left
    if (bst.left !== null){
        answer = answer && checkBalanced(bst.left);
    }

    //if bst.right is not null, recursively call checkbalanced on bst.right
    if (bst.right !== null){
        answer = answer && checkBalanced(bst.right);
    }
    return answer;
}

var b1 = new BST(1);
b1.insert(2);
b1.insert(3);
b1.insert(4);
console.log(checkBalanced(b1), false);

var b2 = new BST(4);
b2.insert(2);
b2.insert(6);
b2.insert(1);
b2.insert(3);
b2.insert(5);
b2.insert(7);
console.log(checkBalanced(b2), true);
