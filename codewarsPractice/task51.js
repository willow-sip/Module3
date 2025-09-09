"use strict";
//Coding Meetup #5
function countLanguages(list) {
    const result = {};
    for (let dev of list) {
        result[dev.language] = (result[dev.language] || 0) + 1;
    }
    return result;
}