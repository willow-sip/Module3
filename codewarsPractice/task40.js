"use strict";
//Training JS #27
function countGrade(scores) {
    let countS = scores.filter(grade => grade == 100).length;
    let countA = scores.filter(grade => grade < 100 && grade >= 90).length;
    let countB = scores.filter(grade => grade < 90 && grade >= 80).length;
    let countC = scores.filter(grade => grade < 80 && grade >= 60).length;
    let countD = scores.filter(grade => grade < 60 && grade >= 0).length;
    let countX = scores.filter(grade => grade == -1).length;
    return { S: countS, A: countA, B: countB, C: countC, D: countD, X: countX };
}