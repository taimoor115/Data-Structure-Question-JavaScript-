// https://leetcode.com/problems/reverse-string/

function reverseString(s) {
  s.reverse();
}


var reverseString = function(s) {
  let start = 0;
  let end = s.length - 1;

  while(start < end) {
      swap(s, start, end);
      start++;
      end--;
  }
};

function swap(s, a, b) {
  let temp = s[a];
  s[a] = s[b];
  s[b] = temp;
}
