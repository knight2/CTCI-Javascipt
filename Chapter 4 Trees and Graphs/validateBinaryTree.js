// Validate BST: Implement a function to check if a binary tree is a binary search tree

let BinaryTree = function(value){
    this.value = value;
    this.left = null;
    this.right = null;
};

let validateBST = function(bt){
    // traverse the tree depth first
    // using an array with stack behavior to check each node's validity
    //assumes values do not repeat

    let validateRecurse = function(currBt, stackArr){
        for (let i = 0; i < stackArr.length; i++){
            if (stackArr[i].side === 'left' && currBt.value < stackArr[i].node.value){
                return false;
            } else if (stackArr[i].side === 'right' && currBt.value < stackArr[i].node.value){
                return false;
            }
        }
        let left = currBt.left === null ? true : validateRecurse(currBt.left, stackArr.concat([{node:currBt, side:"left"}]));
        let right = currBt.right = null ? true : validateRecurse(currBt.right, stackArr.concat([{node:currBt, side:"right"}]));
        return true && left && right;
    };
    return validateRecurse(bt, []);
}

var bt1a = new BinaryTree(5);
var bt1b = new BinaryTree(4);
var bt1c = new BinaryTree(6);
var bt1d = new BinaryTree(1);
var bt1e = new BinaryTree(100);

bt1a.left = bt1b;
bt1a.right = bt1c;
bt1b.left = bt1d;
bt1b.right = bt1e;

console.log(validateBST(bt1a), false);

var bt2a = new BinaryTree(5);
var bt2b = new BinaryTree(3);
var bt2c = new BinaryTree(6);
var bt2d = new BinaryTree(1);
var bt2e = new BinaryTree(4);

bt2a.left = bt2b;
bt2a.right = bt2c;
bt2b.left = bt2d;
bt2b.right = bt2e;

console.log(validateBST(bt2a), true);
