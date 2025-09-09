"use strict";
//Invalid Input - Error Handling #1
function getCount(words) {
    if (typeof words !== "string") return { vowels: 0, consonants: 0 };
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowels = 0;
    let consonants = 0;
    for (let char of words.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            if (vowelsSet.has(char)) vowels++;
            else consonants++;
        }
    }
    return { vowels, consonants };
}