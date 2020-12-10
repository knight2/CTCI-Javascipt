// A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
// steps at a time. Implement a method to count how many possible ways the child can run up the
// stairs.

let numWays = function(N){
    let answer = 0;
    let recurse = function(number){
        if (number === 0){
            answer++;
        } else if (number > 0){
            recurse(number - 1);
            recurse(number - 2);
            recurse(number - 3);
        }
    };
    recurse(N);
    return answer;
};

/* TEST */

console.log(numWays(1), 1);
console.log(numWays(2), 2);
console.log(numWays(3), 4);
