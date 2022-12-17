// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// const palindrome = (str) => {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// };
const palindrome = (str) => {
  return str.split("").every((char, i) => {
    console.log(str.length);
    console.log(str[str.length - i - 1]);
    return char === str[str.length - i - 1];
  });
};
//console.log(palindrome("gadag"));

module.exports = palindrome;
