"use strict";
//Coding Meetup #1
function countDevelopers(list) {
    return list.filter(obj => obj.language == "JavaScript" && obj.continent == "Europe").length;
}