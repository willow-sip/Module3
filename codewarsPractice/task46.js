"use strict";
//Count strings in objects
function strCount(obj) {
    let counter = 0;
    for (const key in obj) {
        if (typeof obj[key] === "string") {
            counter++;
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
            counter += strCount(obj[key]);
        }
    }
    return counter;
}