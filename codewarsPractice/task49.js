"use strict";
//Coding Meetup #16
function askForMissingDetails(list) {
    list.forEach((dev) => {
        for (let key in dev)
            if (dev[key] === null) dev.question = `Hi, could you please provide your ${key}.`;
    })
    return list.filter(dev => dev.hasOwnProperty("question"));
}