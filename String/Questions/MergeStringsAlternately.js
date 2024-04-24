
// https://leetcode.com/problems/merge-strings-alternately/description/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let str = "";
  let x = 0;

  while(x < word1.length || x < word2.length) {
      if(x < word1.length) {
          str += word1[x];
      }
      if(x < word2.length) {
          str += word2[x];
      }
      x++;
  }
  return str;
};
