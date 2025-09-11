"use strict;" 
//Function Cache
function cache(fn) {
  const cacheMap = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cacheMap.has(key)) {
      return cacheMap.get(key);
    }
    const result = fn.apply(this, args);
    cacheMap.set(key, result);
    return result;
  };
}