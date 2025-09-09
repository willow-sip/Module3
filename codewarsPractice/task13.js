"use strict";
//Grasshopper - Summation
var summation = function (num) {
    return num === 1 ? 1 : num + summation(num - 1)
}