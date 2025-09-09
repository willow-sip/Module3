"use strict";
//Training JS #32
function roundIt(n) {
    let numParts = String(n).split(".");
    console.log(numParts)
    if (numParts[0].length < numParts[1].length) {
        return Math.ceil(n);
    } else if (numParts[0].length > numParts[1].length) {
        return Math.floor(n);
    }
    return Math.round(n);
}