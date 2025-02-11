// Asynchronous Javascript

// console.log('First');
// console.log('Second');
// console.log('Third');

// console.log(1);
// setTimeout(()=> console.log(2), 2000);
// console.log(3);

// *************************************
// Promises - Its a replacement for Callback hell programming style.
// 3 states: Pending / Fulfilled / Rejected.

const myPromise = new Promise((resolve, reject) => {
  const error = true;
  if (!error) {
    resolve("Yes, resolved the Promise");
  } else {
    reject("No! rejected the Promise");
  }
});

// The below code will print state of the Promise.
console.log(myPromise);

// To get the value of the promise.
// myPromise.then(val => console.log(val));

// Promise Chaining to get the value of promise.
myPromise
  .then((val) => {
    return val;
  })
  .then((nVal) => {
    console.log(nVal);
  })
  .catch((err) => {
    console.log(err);
  });
