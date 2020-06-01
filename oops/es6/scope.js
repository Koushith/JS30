// var scope
// when and where can the arguements accessible.
//  args can be accessible only inside the function body.

function mul(x) {
  return x * 2;
}

//console.log(mul(2));
// console.log(x);  not defined.

const x = 5;

function f() {
  console.log(x);
  console.log(y); //undefined -cos its outside
}

console.log(f());

const y = 4;
