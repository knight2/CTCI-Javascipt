//Given a string, write a function to check if it is a permutation
// of a palindrome


function palindromePerm(str){
    const cleaned =str.toUpperCase().split(" ").join("");
    const frequency = new Map();
    for (let i = 0; i < cleaned.length; i ++){
        const char = cleaned.charAt(i);
        const prevFreq = frequency.get(char) || 0;
        frequency.set(char, prevFreq + 1);
    }

    let oddCount = 0;
    for (let char of frequency){
        if (char[1] %2 !==0){
            oddCount++;
        }
    }
    return oddCount < 2;
}

console.log(palindromePerm('Tact Coa'));
console.log(palindromePerm('Tact boa'));