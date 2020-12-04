// Given a real number between 0 and 1 (e .g., 0. 72) that is passed in as a double, print
// the binary representation. If the number cannot be represented accurately in binary with at most 32
// characters, pri nt "ERROR:'

let binaryToString = function(number){
    let n = 1;
    let str = '0.';
    while (n <= 32 && number > 0){
        if (number >= Math.pow(2,-n)){
            number -= Math.pow(2, -n);
            str += '1';
        } else{
            str += '0';
        }
        n++;
    }

    if (n === 33 && number > 0){
        return 'ERROR';
    } else {
        return str;
    }
};

console.log(binaryToString(0.625), '0.101');
console.log(binaryToString(0.6255342856783467856932), 'ERROR');
