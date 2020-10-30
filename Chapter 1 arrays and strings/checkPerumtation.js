let checkPermutation = function(str1, str2){
    if (str1.length != str2.length){
        return false; //not same length return false
    }
    else {
        //sort and compare 
        let sorted1 = str1.split('').sort().join('');
        let sorted2 = str2.split('').sort().join('');
        return sorted1 === sorted2;
    }
}

console.log(checkPermutation('aba', 'baa'));
console.log(checkPermutation('aab', 'baac'));
console.log(checkPermutation('abc', 'bda'));