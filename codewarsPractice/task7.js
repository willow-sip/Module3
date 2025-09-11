"use strict;" 
//Training JS #37
function countAnimals(animals, count) {
  let res = [];
  for (const animal of count) {
    const regex = new RegExp(`${animal}`, "ig");
    res.push((animals.match(regex) || []).length);
  }
  return res;
}