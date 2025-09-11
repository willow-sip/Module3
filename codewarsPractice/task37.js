"use strict;" 
//Wrapped Function
Function.prototype.wrap = function (wrapper) {
  const original = this;
  return function (...args) {
    return wrapper.call(this, original, ...args);
  };
}