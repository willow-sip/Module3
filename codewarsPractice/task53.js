"use strict";
//Coding Meetup #12
function findAdmin(list, lang) {
    return list.filter(dev => dev.language == lang && dev.githubAdmin == 'yes');
}