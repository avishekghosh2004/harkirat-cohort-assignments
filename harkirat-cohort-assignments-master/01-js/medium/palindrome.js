/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let finalStr = str.toLowerCase().split("");
  let reverseStr2 = finalStr.reverse();
  if (reverseStr2 != finalStr) {
    return false;
  }
  return true;
}

module.exports = isPalindrome;
