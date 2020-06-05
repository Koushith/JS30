// var title = document.getElementsByClassName('title');
// console.log(title);

// Array.from(title).forEach((item) => console.log(item));

// const wnf = document.querySelectorAll('#book-list li.name ');
// console.log(wnf);

// Array.from(wnf).forEach((ele) => console.log(ele));
// console.log(wnf);

// var books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach((book) => (book.textContent += '(Book Title)'));
// //console.log(books);

// const booklist = document.querySelector('#book-list');
// // booklist.innerHTML = '<h1>Changed now</h1>';
// console.log(booklist.textContent);

// node type

// const banner = document.querySelector('#page-banner');

// console.log('page-banner node type is:', banner.nodeName);
// console.log(banner.nodeType);

// const clonned = banner.cloneNode(true); //true clones everything inside div. orelse it will just clone the div
// console.log(clonned);

// move towards up -parent

// const booklist = document.querySelector('#book-list');

// // console.log('parent node is', booklist.parentNode);
// console.log('parent node is', booklist.parentNode);

// DOM EVENTS

let btns = document.querySelectorAll('#book-list .delete');
// console.log(btns);
Array.from(btns).forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log('Delete clicked');
    // we want too delete li parent- so get the ref
    const li = e.target.parentElement;
    //console.log(li);
    li.parentElement.removeChild(li);
  });
});

// form
// Add books
const list = document.querySelector('#book-list ul');
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function (e) {
  e.preventDefault();
  //   grab the vaule of what user has typed. we are using attribute selector
  const value = addForm.querySelector('input[type="text"]').value;
  // console.log(value);

  //  create elements acc to tags inside book ul
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //   add the text inside btn/span
  deleteBtn.innerText = 'Delete';
  // value from input field
  bookName.innerText = value;

  // append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  // append to ul
  list.appendChild(li);
});
