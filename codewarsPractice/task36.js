"use strict";
//Training JS #23
function infiniteLoop(arr, d, n) {
    let fullArr = [].concat(arr[0], arr[1], arr[2]);
    for (let i = 0; i < n; i++) {
        if(d === "left"){
            fullArr.push(fullArr.shift());
        } else{
            fullArr.unshift(fullArr.pop());
        }
    }
    let result = [];
    let index = 0;
    for (let sub of arr) {
        let len = sub.length;
        result.push(fullArr.slice(index, index + len));
        index += len;
    }
    return result;
}