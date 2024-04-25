// https://leetcode.com/problems/valid-palindrome/description/

function isPalindrome(s) {
  s = s.toLowerCase();
  let str = "";

  for (let i = 0; i < s.length; i++) {
    if (/^[a-z0-9]/.test(s.charAt(i))) {
      str += s.charAt(i);
    }
  }

  let str1 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str1 = str1 + str.charAt(i);
  }
  return str === str1;
}
