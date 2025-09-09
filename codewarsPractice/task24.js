"use strict";
//Training JS #33
function maxMin(arr1, arr2) {
    let difference = [];
    for (let i = 0; i < arr1.length; i++) {
        difference.push(Math.abs(arr1[i] - arr2[i]));
    }
    return [Math.max(...difference), Math.min(...difference)]
}
