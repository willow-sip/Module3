"use strict;" 
//Calculating with objects
Num.prototype[Symbol.toPrimitive] = function (hint) {
  if (hint === "number" || hint === "default") {
    return this.num;
  }
  return this.toString();
}