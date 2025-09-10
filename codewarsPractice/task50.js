"use strict";
//Coding Meetup #9
function isAgeDiverse(list) {
    let ageGroups = [];

    for (const dev of list) {
        const age = dev.age;
        if (age >= 100) ageGroups.push("centenarian");
        else if (age >= 90) ageGroups.push("nineties");
        else if (age >= 80) ageGroups.push("eighties");
        else if (age >= 70) ageGroups.push("seventies");
        else if (age >= 60) ageGroups.push("sixties");
        else if (age >= 50) ageGroups.push("fifties");
        else if (age >= 40) ageGroups.push("forties");
        else if (age >= 30) ageGroups.push("thirties");
        else if (age >= 20) ageGroups.push("twenties");
        else if (age >= 10) ageGroups.push("teens");
    }
    return ageGroups.length === 10;
}