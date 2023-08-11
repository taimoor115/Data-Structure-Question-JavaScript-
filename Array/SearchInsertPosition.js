// https://leetcode.com/problems/search-insert-position/description/
// 35

var searchInsert = function(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while(low <= high) {
      let mid = Math.floor((low + high) / 2);
      if(arr[mid] == target) {
          return mid;
      }
      if(arr[mid] > target) {
          high = mid - 1;
      } else {
          low = mid + 1;
      }
  }
  return low;
};
arr = [1,2,2,3,4,5]
console.log(searchInsert(arr,2));
