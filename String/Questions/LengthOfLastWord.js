// https://leetcode.com/problems/length-of-last-word/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim();
  let counter = 0;
  for(let i = s.length - 1; i >= 0 ; i--) {
      if(s[i] == " ") {
          break;
      }
      counter++;
  }

  return counter;
};

