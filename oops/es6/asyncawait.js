// function makeRequest(location) {
//   return new Promise((resolve, reject) => {
//     console.log(`making request to ${location}`);
//     if (location == 'google') {
//       resolve('Googlesays hi');
//     } else {
//       reject(' we can only talk to Google');
//     }
//   });
// }

// function processRequest(response) {
//   return new Promise((resolve, reject) => {
//     console.log('Processing Response');
//     resolve(`Extra Information +${response}`);
//   });
// }
// makeRequest('google')
//   .then((response) => {
//     console.log('Response Received');
//     return processRequest(response);
//   }).then()

//   .catch((err) => {
//     console.log(err);
//   });

async function runMyCode() {
  console.log('begin');

  await new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('I am in the middle');
    }, 1000);
    resolve();
  });
  console.log('end');
}

runMyCode();
