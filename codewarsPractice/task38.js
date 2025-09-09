"use strict";
//Training JS #25
function sortIt(arr) {
    let result = [...arr];
    result.sort((a, b) => {
        let n = arr.filter(x => x === a).length,
            m = arr.filter(y => y === b).length;
        return n == m ? b - a : n - m;
    });
    return result;
}