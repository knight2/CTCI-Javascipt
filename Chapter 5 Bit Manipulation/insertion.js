// You are given two 32-bit numbers, Nand M, and two bit positions, i and
// j. Write a method to insert Minto N such that M starts at bit j and ends at bit i. You
// can as sume that the bits j through i have enough space to fit all of M. That is, if
// M = 10011, you can assume that there are at least 5 bits between j and i. You would not, for
// example, have j = 3 and i = 2, because M could not fully fit between bit 3 and bit 2.

let insertion = function(N, M, i, j){
    let n = N.split('');
    let m = M.split('');
    let nlength = n.length -1;
    let mlength = m.length -1;
    for (let a = 0; a < j - i + 1; a++){
        console.log(m[mlength -a]);
        n[nlength - (i + a)] = m[mlength-a];
    }
    return n.join('');
}

console.log(insertion('10000000000', '10011', 2, 6), '10001001100');
