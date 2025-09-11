"use strict;" 
//Concatenating functions
const addOne = function (e) {
  return e + 1;
}
const square = function (e) {
  return e * e;
}

Function.prototype.pipe = function (...functions) {
  const self = this;
  return function (value) {
    return functions.reduce((param, func) => func(param), self(value));
  };
}