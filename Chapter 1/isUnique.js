/// function to check if string contains all unique characters
/// returns false if not, true otherwise

function uniqueChar(str){
    let obj = {};
    for (let i = 0; i< str.length; i++){
        if (obj[str[i]] && obj[str[i]] >=1){
            return false;
        }
        else{
            obj[str[i]] = 1;
        }
    }
    return true;
}

function allUnique(str){
    for (var i =0; i< str.length; i++){
        for (var j = i + 1; j<str.length; j++){
            if (str[i] === str[j]){
                return false;
            }
        }
    }

    return true; //no match, returns true
}

console.log(uniqueChar('abcd'), 'true');
console.log(uniqueChar('abccd'), 'false');

console.log(allUnique('abcd'));
console.log(allUnique('abccd'));