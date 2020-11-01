let stringRotation = function(str1, str2){
    if (str1.length !== str2.length){
        return false;
    }
    return (str2 + str2).includes(str1);
}

console.log(stringRotation('waterbottle', 'erbottlewat'));
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);
