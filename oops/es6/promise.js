// let p = new Promise((resole, reject) => {
//   let a = 2;
//   if (a == 2) {
//     resole('success');
//   } else {
//     reject('failed');
//   }
// });

// p.then((message) => {
//   console.log('promise was fullfilled ' + message);
// }).catch((message) => {
//   console.log('this was rejected ' + message);
// });

let cleanTheRoom = new Promise((resolve, rejected) => {
  // clean the room
  isCleaned = false;
  if (isCleaned == true) {
    resolve('cleaned');
  } else {
    rejected('not cleaned');
  }
});

cleanTheRoom
  .then((cleaned) => {
    console.log(`room is  ${cleaned} `);
  })
  .catch((notCleaned) => {
    console.log(`room is ${notCleaned}`);
  });
