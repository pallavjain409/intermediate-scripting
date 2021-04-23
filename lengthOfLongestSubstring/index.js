// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


var compareMaxWithCurrentStr = (max, length) => (max < length ? length : max);
var isCharAlreadyPresent = (str, char) => str.includes(char);
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  let left = 0;
  let right = 0;
  let str = [];
  let max = 0;
  while (right < s.length) {
    let char = s.charAt(right);
    if (!isCharAlreadyPresent(str, char)) {
      str.push(char);
      right++;
    } else {
      max = compareMaxWithCurrentStr(max, str.length);
      let cL = s.charAt(left);
      while (isCharAlreadyPresent(str, cL)) {
        str.shift();
        left++;
      }
    }
  }
  max = compareMaxWithCurrentStr(max, str.length);
  return max;
};

console.log(lengthOfLongestSubstring("aab"));  // 2
console.log(lengthOfLongestSubstring("bbbbb")); // 1 
console.log(lengthOfLongestSubstring("pwwkew")) // 3
