"use strict";
//Training JS #30
function tailAndHead(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        const tail = String(arr[i]).slice(-1);
        const head = String(arr[i + 1]).slice(0, 1);
        result.push(Number(tail) + Number(head));
    }
    return result.reduce((a, b) => a * b);
}