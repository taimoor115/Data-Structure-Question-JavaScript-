// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs) {
  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every((str) => str[i] === strs[0][i])) {
      prefix += strs[0][i];
    } else break;
  }
  return prefix;
}
