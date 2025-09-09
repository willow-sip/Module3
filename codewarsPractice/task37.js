"use strict";
//Training JS #24
function threeInOne(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i += 3)
        res.push(arr[i] + arr[i + 1] + arr[i + 2]);
    return res;
}