// https://leetcode.com/problems/jump-game/description/
// 55

var jump = function (arr) {
  if (arr.length === 1) {
    return true;
  }

  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if(max <= i && arr[i] == 0) {
      return false;
    }

    if(arr[i] + i > max) {
      max = arr[i] + i;
    }

    if(max >= arr.length - 1) {
      return true;
    }
  }
  return false;
};


arr = [1,2,2,2];
console.log(jump(arr));
