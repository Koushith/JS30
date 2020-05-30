// // // call apply and bind

// // var obj = {
// //   num: 2,
// // };

// // var addToThis = function (a) {
// //   return this.num + a;
// // };

// // var output = addToThis.call(obj, 3);
// // console.log(output);

// // let name = {
// //   first: 'koushith',
// //   last: 'Amin',
// // };

// // let name2 = {
// //   first: 'preetham',
// //   last: 'amin',
// // };

// // let fullname = function (first, last) {
// //   console.log(this.first + ' ' + this.last);
// // };

// // fullname.call(name2);
// // fullname.apply(name2, ['anki', 'salian']);

// const john = {
//   name: 'john',
//   age: 23,
// };

// const jane = {
//   name: 'jane',
//   age: 23,
// };

// function greeting(lang) {
//   console.log(
//     `hi, my name is ${this.name} and i am ${this.age} years old and i speak ${lang}`
//   );
// }

// // using bind
// // const greetingJohn = greeting.bind(jane, 'eng');
// // console.log(greeting);
// // greetingJohn();

// // using call
// greeting.call(jane, 'english');

const john = {
  name: 'john',
  age: 23,
};

const jane = {
  name: 'jane',
  age: 23,
};

function greeting() {
  console.log(` hi my name is ${this.name} and i am ${this.age} years old`);
}
// call
//greeting.apply(jane, ['hi', 'koushith ']);
x = greeting.bind(john);
x();
