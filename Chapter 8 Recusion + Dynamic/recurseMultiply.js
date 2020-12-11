// Write a recursive function to multiply two positive integers without using the
// * operator. You can use addition, subtraction, and bit shifting, but you should minimize the number
// of those operations.

let recurseMult = function(a,b){
    if (a < 0 || b < 0){
        throw 'error: a and b should only be positive ints'
    }
    if (b === 0){
        return 0;
    } else if (b === 1){
        return a;
    } else{
        return a + recurseMult(a, b-1);
    }
};

console.log(recurseMult(2, 3));
console.log(recurseMult(2, 10));
