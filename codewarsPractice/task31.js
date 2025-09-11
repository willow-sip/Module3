"use strict";
//Training JS #20
function topSecret(str) {
    let decrypted = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            decrypted += String.fromCharCode(((code - 65 - 3 + 26) % 26) + 65);
        }
        else if (code >= 97 && code <= 122) {
            decrypted += String.fromCharCode(((code - 97 - 3 + 26) % 26) + 97);
        }
        else {
            decrypted += char;
        }
    }
    return decrypted;
}