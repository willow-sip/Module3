"use strict";
//Training JS #18
function splitAndMerge(string, separator) {
    return string.split(' ').map(el => el.split('').join(separator)).join(' ');
}