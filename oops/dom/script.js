// var title = document.getElementsByClassName('title');
// console.log(title);

// Array.from(title).forEach((item) => console.log(item));

// const wnf = document.querySelectorAll('#book-list li.name ');
// console.log(wnf);

// Array.from(wnf).forEach((ele) => console.log(ele));
// console.log(wnf);

var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach((ele) => (ele.textContent += '(Book Title)'));
console.log(books);
