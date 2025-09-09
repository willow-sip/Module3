"use strict";
//Training JS #29
function bigToSmall(arr) {
    return arr.flat().sort((a, b) => b - a).join(">");
}