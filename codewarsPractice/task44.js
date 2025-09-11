"use strict;" 
//Write JavaScript's 'call' function using apply.
Function.prototype.call = function(context, ...args) {
  return this.apply(context, args);
}