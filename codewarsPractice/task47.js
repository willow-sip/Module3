"use strict;" 
//Basics - Generators #1
function* generator() {
  let count = 1;
  while (true) {
    const input = yield count;
    if (typeof input === 'number') {
      count = input;
    } else {
      count++;
    }
  }
}