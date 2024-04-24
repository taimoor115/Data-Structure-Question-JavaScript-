// https://leetcode.com/problems/valid-anagram/description/

var isAnagram = function(s, t) {
  return s.split("").sort().join("") == t.split("").sort().join("");
};


