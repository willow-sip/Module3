"use strict";
//Training JS #15
function howManySmaller(arr, n) {
    arr = arr.map(el => el.toFixed(2));
    let counter = 0;
    arr.forEach(el => el < n ? counter++ : counter);
    return counter;
}