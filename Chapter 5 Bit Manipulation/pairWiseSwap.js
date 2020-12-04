// Write a progr am to swap odd and even bi ts in an integer with as few instructions as
// possible (e . g. , bit 13 and bit 1 are swapped, bit 2 and bit 3 are swapped, and so on).

var pairwiseSwap = function(number) {
    var oddBits = (number >> 1).toString(2);
    var evenBits = (number << 1).toString(2);
    console.log(oddBits, evenBits);
    var isOdd = true;
    var answer = '';
    for (var i = 0; i < number.toString(2).length; i++) {
      if (isOdd) {
        answer = oddBits[oddBits.length - 1 - i] === undefined ?
                 '0' + answer :
                 oddBits[oddBits.length - 1 - i] + answer;
      } else {
        answer = oddBits[oddBits.length - 1 - i] === undefined ?
                 '0' + answer :
                 evenBits[evenBits.length - 1 - i] + answer;
      }
      isOdd = !isOdd;
    }
    return answer;
  };
  
  /* TEST */
  console.log(pairwiseSwap(4));
  