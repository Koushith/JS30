// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// function reverseString(str) {
//   const strArr = str.split('');
//   strArr.reverse();
//   return strArr.join('');
// }

// console.log(reverseString('hello'));
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// console.log(reverseString('hello'));

// function reverseString(str) {
//   let revStr = '';
//   str.split('').forEach((char) => (revStr = char + revStr));
//   return revStr;
// }

function reverseString(str) {
return str.split('').reverse().join('');
}
console.log(reverseString('hello'));
