// All Star Code Challenge #16
// Write a function that takes a string argument and returns the first letter that appears only once in the string.

// ONLY lowercase letters from the english alphabet will be used as input
// There will ALWAYS be at least one non-repeating letter in the input string
// "aabbccdde" ==> 'e'
// "wxyz" ==> 'w'
// "testing" ==> 'e'
function noRepeat(str) {
  for (const char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
}
let str= "aabbccdde";
console.log(noRepeat(str));