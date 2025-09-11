"use strict;" 
//Training JS #38
function findSimilarity(str, word) {
  const firstLetter = word[0];
  const lastLetter = word[word.length - 1];
  const len = word.length;

  const regex = new RegExp(`\\b${firstLetter}.{${len - 2}}${lastLetter}\\b`, 'g');

  return str.match(regex) ? str.match(regex).join(' ') : '';
}