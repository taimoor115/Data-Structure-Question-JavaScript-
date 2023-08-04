// https://leetcode.com/problems/number-of-good-pairs/
// 1512

var numIdenticalPairs = function(nums) {
  let counter = 0;
  for(let i = 0; i < nums.length; i++) {
      for(let j = i + 1; j < nums.length; j++) {
          if(nums[i] == nums[j]) {
              counter += 1;
          }
      }
  }
  return counter;
};

let arr = [1,2,3,1,1,3]
console.log(numIdenticalPairs(arr));
