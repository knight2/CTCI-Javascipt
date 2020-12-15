// Implement an algorithm to print all valid (e.g ., properly opened and closed) combinations
// of n pairs of parentheses.

let parens = function(n){
    let answers = [];
    let recurse = function(currParens, remainingPairs){
        if (remainingPairs === 0 ){
            answers.push(currParens);
        } else{
            let used = {};
            if (!used[`(${currParens})`]){
                used[`(${currParens})`] = true;
                recurse(`(${currParens})`, remainingPairs -1);
            }
            if (!used[`()${currParens}`]) {
                used[`()${currParens}`] = true;
                recurse(`()${currParens}`, remainingPairs - 1); 
              }
              if (!used[`${currParens}()`]) {
                used[`${currParens}()`] = true;
                recurse(`${currParens}()`, remainingPairs - 1);      
              }        
        }
    };
    recurse('', n);
    return answers;
};

var testn = 3;
console.log(parens(testn));
