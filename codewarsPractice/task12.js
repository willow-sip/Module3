"use strict;" 
//Training JS #42
const regex = /\d(?=(\d{3})+(?!\d))/g;
function addCommas(money, reg) {
  return money.replace(reg, "$&,");
}