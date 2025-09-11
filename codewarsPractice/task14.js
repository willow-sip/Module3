"use strict";
//If you can't sleep, just count sheep!!
var countSheep = function (num) {
    return num == 0 ? "" : countSheep(num - 1) + `${num} sheep...`;
}