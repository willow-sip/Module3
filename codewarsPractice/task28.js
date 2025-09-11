"use strict";
//Training JS #17
function firstToLast(str, c) {
    return str.indexOf(c) === -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c);
}