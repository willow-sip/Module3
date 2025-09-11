"use strict;" 
//SantaClausable Interface
function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every((methodName) => {
    return typeof obj[methodName] === 'function';
  });
}