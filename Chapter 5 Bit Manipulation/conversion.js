// Write a function to determine the number of bits you would need to flip to convert
// integer A to integer B.

let countBits = function(number){
    let string = number.toString(2);
    return string.split('').reduce((numBits, char) =>{
        return char === '1' ? numBits +1 : numBits;
    }, 0);
};

let conversion = function(number1, number2){
    return countBits(number1 ^ number2);
};

console.log(conversion(29, 15), 2);
