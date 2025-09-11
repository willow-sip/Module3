"use strict;" 
//Color Ghost
const colors = ["white", "yellow", "purple", "red"];
let Ghost = function () {
  this.color = colors[Math.floor(Math.random() * 4)];
}