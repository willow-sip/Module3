"use strict";
//Throw from list - Error Handling #3
function validate(username, password) {
    username = username.trim();
    password = password.trim();
    if (username.length > 12)
        throw ERRORS.usernameTooLong(username);
    if (username.length < 1)
        throw ERRORS.usernameTooShort(username);
    if ([...`(){}[]|;:'"/?.,<>~-=+*&^%$@!`].some(char => username.includes(char)))
        throw ERRORS.usernameInvalidCharacters(username);

    if (password.length > 24)
        throw ERRORS.passwordTooLong(password);
    if (password.length < 8)
        throw ERRORS.passwordTooShort(password);

    if (password.includes(username))
        throw ERRORS.passwordContainsUsername(password);

    const allowedSpecials = new Set(';:?.,<>~*^%$@!_');
    if ([...password].some(char => {
        const isAlphaNum = /[a-zA-Z0-9]/.test(char);
        return !isAlphaNum && !allowedSpecials.has(char);
    })) {
        throw ERRORS.passwordInvalidCharacters(password);
    }

    if (!/[A-Z]/.test(password))
        throw ERRORS.passwordNoCapital(password);
    if (!/[0-9]/.test(password))
        throw ERRORS.passwordNoNumber(password);

    return true;
}