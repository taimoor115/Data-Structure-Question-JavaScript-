// https://leetcode.com/problems/group-anagrams/solutions/3107534/92-49-javascript-fast-very-easy-to-understand-with-video-explanation/
// 49

var groupAnagrams = function(strs) {
  let map = {}

  for(let i = 0; i < strs.length; i++){
      let s = strs[i].split('').sort().join('');
      if(!map[s]) {
      map[s] = [];
      }
      map[s].push(strs[i])
}
  return Object.values(map);
};


// var groupAnagrams = function(strs) {
//   let map = {}

//   for(let str of strs){
//       let s = str.split('').sort().join('')
//       if(!map[s]) map[s] = []
//       map[s].push(str)
//   }
//   return Object.values(map)
// };
strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs));
