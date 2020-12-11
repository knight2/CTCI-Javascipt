// Write a method to return all subsets of a set.

let returnSubsets = function(set){
    let subsets = [];
    let recurse = function(currSet, remainingSet){
        subsets.push(currSet);
        for (let i = 0; i < remainingSet.length; i++){
            recurse(currSet.concat([remainingSet[i]]), remainingSet.slice(i + 1));
        }
    };

    recurse([], set);
    return subsets;
};

console.log(returnSubsets([1, 2, 3, 4]));
