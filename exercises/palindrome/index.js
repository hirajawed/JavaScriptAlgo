// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, i) =>{ //first argument in the function is for
    //every element in the array (each character in the array),
    //because we are comparing the last, second last items and so on then we give the "index"
    //position in the array as (i))
    return char === str[str.length -i - 1];
    //str.length - i is looking at the index by looping at each step
    // str.length  - 1 is looking to subtract from the v first index which is 0 (to the last index which 4)
  });
  }
module.exports = palindrome;




// SOLUTION 1

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('')
//   return str == reversed;
// }
//
// module.exports = palindrome;
