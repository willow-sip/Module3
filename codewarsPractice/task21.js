"use strict";
//Training JS #14
function colorOf(r, g, b) {
    const toHex = n => n.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}