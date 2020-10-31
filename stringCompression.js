/* Implement a method to perform basic string compression
using the counts of repeated characters. aabcc would become a2b1c2 
If compressed string would not become smaller than original, return 
original string. */


let stringCompression = function(str){
    var compressed = '';
    var currChar = '';
    var currCount = '';
    var maxCount =1;
    for (var i = 0; i <str.length; i++){
        if (currChar !== str[i]){
            console.log(currChar, str[i], i);
            compressed = compressed + currChar + currCount;
            maxCount = Math.max(maxCount, currCount);
            currChar = str[i];
            currCount = 1;
        } else{
            currCount++;
        }
    }

    compressed = compressed + currChar + currCount;
    maxCount = Math.max(maxCount, currCount);
    return maxCount === 1 ? string : compressed;
}

console.log('aaaaa', stringCompression('aaaaa'));
console.log('aabcccccaaa', stringCompression('aabcccccaaa'), 'a2b1c5a3');
