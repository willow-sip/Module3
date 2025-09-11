"use strict;" 
//A Promise is a Promise
function promiseHelloWorld() {
  return new Promise((res, rej) => {
    res();
  })
    .then(() => 'Hello World!')
    .catch(() => '');
}