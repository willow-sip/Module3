"use strict";
//Is n divisible by x and y?
function isDivisible(n, x, y) {
    if (n >= x > 0 && n >= y > 0) {
        return (n % x == 0 && n % y == 0) ? true : false;
    }
    return false;
}