"use strict";
//Training JS #36
function rndCode() {
    let firstPart = "ABCDEFGHIJKLM";
    let thirdPart = "~!@#$%^&*";
    let password = "";

    for (let i = 0; i < 2; i++) {
        password += firstPart[Math.floor(Math.random() * firstPart.length)];
    }
    for (let i = 0; i < 4; i++) {
        password += Math.floor(Math.random() * 10);
    }
    for (let i = 0; i < 2; i++) {
        password += thirdPart[Math.floor(Math.random() * thirdPart.length)];
    }
    return password;
}