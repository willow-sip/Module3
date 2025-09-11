"use strict";
//Training JS #28
function mirrorImage(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (String(arr[i]) == String(arr[i + 1]).split('').reverse().join('')) {
            return [arr[i], arr[i + 1]];
        }
    }
    return [-1, -1];
}