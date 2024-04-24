// https://leetcode.com/problems/valid-anagram/description/

// var isAnagram = function(s, t) {
//   return s.split("").sort().join("") == t.split("").sort().join("");
// };

let strs = ["flower", "flow", "flight"];
let prefix = "";
for (let i = 0; i < strs[0].length; i++) {
  if (
    strs.every((str) => {
      console.log(str[i]);
      // console.log(str[i] === strs[0][i]);
      return str[i] === strs[0][i];
    })
  ) {
    prefix += strs[0][i];
  } else {
    break;
  }
}

console.log(strs[0][0]);
