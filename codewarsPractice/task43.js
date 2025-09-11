"use strict;" 
//Replicate `new`
function nouveau (Constructor, ...args) {
  const obj = Object.create(Constructor.prototype);
  const result = Constructor.apply(obj, args);
  if((typeof result === "object" || typeof result === "function") && result !== null){
    return result;
  }
  return obj;
}