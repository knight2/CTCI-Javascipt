// You are given a binary tree in which each node contains an integer value (which
//     might be positive or negative). Design an algorithm to count the number of paths that sum to a
//     given value. The path does not need to start or end at the root or a leaf, but it must go downwards
//     (traveling only from parent nodes to child nodes).

/* helper function - sum of an array */
var SumArr = function(arr) {
    return arr.reduce((total, num) => total + num, 0);
  };
  
  var BinaryTree = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
  
  BinaryTree.prototype.countPathsWithRoot = function(value, path) {
    var pathCount = 0;
    if (path === undefined) {
      path = [this.value];
    } else {
      path = [...path, this.value];
    }
    if (SumArr(path) === value) {
      pathCount++;
    }
    if (this.left !== null) {
      pathCount += this.left.countPathsWithRoot(value, path);
    }
    if (this.right !== null) {
      pathCount += this.right.countPathsWithRoot(value, path);
    }
    return pathCount;
  };
  
  BinaryTree.prototype.pathsWithSum = function(value) {
    var pathCount = 0;
    pathCount += this.countPathsWithRoot(value);
    if (this.left !== null) {
      pathCount += this.left.countPathsWithRoot(value);
    }
    if (this.right !== null) {
      pathCount += this.right.countPathsWithRoot(value);
    }
    return pathCount;
  };
  
  /* TEST */
  var a = new BinaryTree(1);
  var b = new BinaryTree(1);
  var c = new BinaryTree(1);
  var d = new BinaryTree(10);
  
  a.left = b;
  a.right = c;
  c.left = d;
  
  console.log(a.pathsWithSum(12), 1);
  console.log(a.pathsWithSum(2), 2);
  console.log(a.pathsWithSum(1), 3);  