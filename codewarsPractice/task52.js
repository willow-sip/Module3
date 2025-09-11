"use strict;" 
//Deep Freeze
//it didn't work in codewars, but in my opinion condition
//on line 9 is supposed to include !Object.isFrozen(prop)
Object.deepFreeze = function (object) {
  Object.freeze(object);
  Object.getOwnPropertyNames(object).forEach((key) => {
    const prop = object[key];
    if (prop !== null && typeof prop === 'object') {
      Object.deepFreeze(prop);
    }
  });
  return object;
}