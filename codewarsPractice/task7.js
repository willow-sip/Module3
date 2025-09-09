"use strict";
//Training JS #7
function saleHotdogs(n) {
    if (n > 0 && n < 5) {
        return n * 100;
    } else if (n >= 5 && n < 10) {
        return n * 95;
    } else if (n >= 10) {
        return n * 90;
    } else {
        return 0;
    }
}