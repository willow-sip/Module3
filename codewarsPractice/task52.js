"use strict";
//Coding Meetup #6
function isSameLanguage(list) {
    return list.every(dev => dev.language === list[0].language);
}