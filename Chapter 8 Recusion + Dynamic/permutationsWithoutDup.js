// Write a method to compute all permutations of a string of unique
// characters.

let permuteString = function(string){
    let answers = [];
    let recurse = function(currPerm, remainingChars){
        if(remainingChars.length === 0){
            answers.push(currPerm);
        } else{
            for (let i = 0; i < remainingChars.length; i++){
                recurse(currPerm + remainingChars.charAt(i), remainingChars.slice(0,i) + remainingChars.slice(i+1))
            }
        }
    };

    recurse('', string);
    return answers;
}

var testString = 'abcd';
console.log(permuteString(testString));
