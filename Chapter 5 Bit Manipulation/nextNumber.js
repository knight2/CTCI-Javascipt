// Given a positi ve integer, print the next smallest and the next largest number that
// have the same number of 1 bi ts in their binary representation.

let countOnes = function(string){
    let strArray = string.split('');
    return strArray.reduce((count, char) =>{
        return char === '1' ? count + 1 : count;
    }, 0);
};

let next = function(number, numOnes, iterator){
    let currNum = iterator(number);
    while(countOnes(currNum.toString(2)) !== numOnes){
        currNum = iterator(currNum);
    }

    return currNum;
}

let nextSmallest = function(number, numOnes){
    return next(number, numOnes, currNum => currNum -1);
}

let nextLargest = function(number, numOnes){
    return next(number, numOnes, currNum => currNum +1);
}

let nextNumber = function(number){
    let binary = number.toString(2);
    let numOnes = countOnes(binary);
    console.log('number', number.toString(2));
    console.log('nextSmallest', nextSmallest(number, numOnes).toString(2));
    console.log('nextLargest', nextLargest(number, numOnes).toString(2));
};

nextNumber(10000000000000000);
