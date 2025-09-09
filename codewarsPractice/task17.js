"use strict";
//Training JS #9
function padIt(str, n) {
    let i = 1;
    while (i <= n) {
        str = i % 2 === 0 ? str + "*" : "*" + str;
        i++;
    }
    return str;
}