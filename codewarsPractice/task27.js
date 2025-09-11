"use strict";
//Training JS #16
function cutIt(arr) {
    let min = Math.min(...arr.map(el => el.length));
    return arr.map(el => el.slice(0, min));
}