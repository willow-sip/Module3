"use strict";
//Count the divisors of a number
function getDivisorsCnt(n) {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count += (i * i === n) ? 1 : 2;
        }
    }
    return count;
} //looping through sqrt(n) only and counting both i + n/i