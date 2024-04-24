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

// Second Solution
function longestCommonPrefix(strs) {
  strs.sort();
  let start = strs[0];
  let end = strs[strs.length - 1];
  let counter = 0;

  while (counter < start.length && counter < end.length) {
    if (start.charAt(counter) === end.charAt(counter)) {
      counter++;
    } else {
      break;
    }
  }
  return start.substring(0, counter);
}
