// https://leetcode.com/problems/reverse-words-in-a-string/description/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.replace(/\s+/g, " ").trim().split(" ").reverse().join(" ");
  return s;
};
