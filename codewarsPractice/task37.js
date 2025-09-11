"use strict";
//Training JS #24
function threeInOne(arr) {
    let res = [];
    let firstNum, secondNum, thirdNum;
    for (let i = 0; i < arr.length; i += 3)
        firstNum = arr[i];
        secondNum = arr[i + 1];
        thirdNum = arr[i + 2];
        res.push(firstNum + secondNum + thirdNum);
    return res;
}