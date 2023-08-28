// https://leetcode.com/problems/two-sum/description/
// 1

var twoSum = function(arr, target) {
  for(let i = 0; i < arr.length - 1; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          if(arr[i] + arr[j] == target) {
              return [i, j];
          }
      }
  }
  return [-1,-1];
};
