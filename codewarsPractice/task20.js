"use strict;" 
//Split The Bill
function splitTheBill(group) {
  const avgAmount = Object.values(group).reduce((a, b) => a + b, 0) / Object.values(group).length;
  const roundedAvg = Math.round(avgAmount * 100) / 100;
  const result = {};
  for (const person in group) {
    result[person] = Math.round((group[person] - roundedAvg) * 100) / 100;
  }
  return result;
}