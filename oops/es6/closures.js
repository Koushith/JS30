// let myName = 'koushith';

// function printName() {
//   console.log(myName);
//   console.log(test);
// }
// myName = 'Preetham';
// printName();
// myName = 'Amin';

// printName();
// //

function outerFunction(outerVar) {
  return function innerFunvtion(innerVar) {
    console.log(`Outer Variable : ${outerVar}`);
    console.log(`Inner Variable : ${innerVar}`);
  };
}
const call = outerFunction('outside');
call('inner');
