// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
// 2114

// Question
// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6

var mostWordsFound = function(sentences) {
  var counter = 0;

  for (let i = 0; i < sentences.length; i++) {
    let length = sentences[i].split(' ').length;
    counter = counter > length ? counter : length;
  }
  return counter;
}

let sentences = ["Taimoor Hussain ", "Taimoor Hussain Ghayoor Hussain"]
console.log(mostWordsFound(sentences));
