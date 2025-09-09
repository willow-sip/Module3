"use strict";
//Training JS #31
function blackAndWhite(arr) {
    return `It's a ${!Array.isArray(arr) ? `fake` :
        arr.includes(5) && arr.includes(13) ? `black` : `white`} array`;
}