"use strict;" 
//Pipelining and composing functions
function pipeline(seed, ...functions) {
  return functions.reduce((acc, func) => func(acc), seed);
}
function compose(...functions) {
  return function (args) {
    return functions.reduceRight((acc, func) => func(acc), args);
  };
}