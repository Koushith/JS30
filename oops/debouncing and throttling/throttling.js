// const debounce = (fn, delay) => {
//   let timeoutID;
//   return function (args) {
//     if (timeoutID) {
//       clearTimeout(timeoutID);
//     }
//     timeoutID = setTimeout(() => {
//       fn(args);
//     }, delay);
//   };
// };

// document.getElementById('btn').addEventListener(
//   'click',
//   debounce((e) => {
//     console.log('clicked');
//   }, 2000)
// );

const debounce = function (fn, delay) {
  return function () {
    let timeOutId;
    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(() => {
      fn();
    }, delay);
  };
};

document.getElementById('btn').addEventListener(
  'click',
  debounce((e) => {
    console.log('clicked');
  }, 2000)
);
