// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// function isPalindrome(str) {
//   let rev = str.split('').reverse().join('');
//   if (rev === str) {
//     return 'string is pal';
//   } else {
//     return 'string is not pal';
//   }
// }

function isPalindrome(str) {
  let reverse = str.split('').reverse().join('');
  return reverse == str;
}

console.log(isPalindrome('racecar'));
