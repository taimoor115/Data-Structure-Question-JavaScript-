// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/

var numberOfSteps = function(num) {
  let counter = 0;
  while(num != 0) {
      num % 2 == 0 ? num /= 2 : num -= 1;
      counter++;
  }
  return counter;
};
