"use strict";
//Persistent Bugger
function persistence(num) {
    let counter = 0;
    while (num >= 10) {
        counter++;
        num = String(num).split('').map(Number).reduce((a, b) => a * b)
    }
    return counter;
}
