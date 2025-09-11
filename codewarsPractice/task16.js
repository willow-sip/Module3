"use strict";
//Training JS #8
function howManydays(month) {
    switch (month) {
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            return 28;
        default:
            return 31;
    }
}