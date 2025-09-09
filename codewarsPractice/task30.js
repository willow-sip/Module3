"use strict";
//Training JS #19
function alienLanguage(str) {
    let words = str.split(" ");
    return words.map(word => {
        let upper = word.slice(0, -1).toUpperCase();
        let last = word.slice(-1).toLowerCase();
        return upper + last;
    }).join(" ");
}