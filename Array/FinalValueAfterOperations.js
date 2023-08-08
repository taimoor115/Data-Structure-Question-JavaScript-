// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

var finalValueAfterOperations = function(operations) {
  let counter = 0;
  for(let i = 0; i < operations.length; i++) {
      if(operations[i] == "X++" || operations[i] == "++X") {
          counter++;
      } else {
          counter--;
      }
  }
  return counter;
};
operations = ["--X","X++","X++"]
console.log(finalValueAfterOperations(operations));
