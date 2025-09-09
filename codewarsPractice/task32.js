"use strict";
//Training JS #21
function fiveLine(s) {
    s = s.trim();
    let newStr = s;
    for (let i = 1; i < 5; i++) {
        newStr += "\n";
        for (let j = i + 1; j > 0; j--) {
            newStr += s;
        }
    }
    return newStr;
}