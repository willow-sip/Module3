"use strict";
//Training Time
function shuffleIt(arr, ...odds) {
    for ([i, j] of odds) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}