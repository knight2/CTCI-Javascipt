// Write a method to compute all permutations of a string whose charac-
// ters are not necessarily unique. The list of permutations should not have duplicates

let permNoDupes = function(string){
    let answer = [];
    let recurse = function(currPerm, remainingChars){
        if (remainingChars.length === 0){
            answer.push(currPerm);
        } else{
            let usedChars = {};
            for (let i = 0; i < remainingChars.length; i++){
                if (!usedChars[remainingChars.charAt(i)]){
                    usedChars[remainingChars.charAt(i)] = true;
                    recurse(currPerm + remainingChars.charAt(i), remainingChars.slice(0, i) + remainingChars.slice(i+1));
                }
            }
        }
    };

    recurse('', string);
    return answer;
};

var test1 = 'aaa';
var test2 = 'abc';
var test3 = 'aba';

console.log(permNoDupes(test1));
console.log(permNoDupes(test2));
console.log(permNoDupes(test3));
