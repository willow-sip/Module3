"use strict";
//Training JS #25
function sortIt(arr) {
    let result = [...arr];
    let frequencyA, frequencyB;
    result.sort((a, b) => {
        frequencyA = arr.filter(x => x === a).length;
        frequencyB = arr.filter(y => y === b).length;
        if(frequencyA === frequencyB){
            return b - a;
        }
        return frequencyA - frequencyB;
    });
    return result;
}