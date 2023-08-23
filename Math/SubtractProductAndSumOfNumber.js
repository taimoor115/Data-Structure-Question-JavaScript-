// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/

var subtractProductAndSum = function(n) {
  let product = 1;
  let sum = 0;

  while(n > 0) {
      let lastDigit = n % 10;
      sum += lastDigit;
      product *= lastDigit;

      n = Math.floor(n / 10);
  }

  return product - sum;
};
