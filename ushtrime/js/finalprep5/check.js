
function validateLogin(username, password) {
    const correctUsername = "user123"; // predefined correct username
    const correctPassword = "pass123"; // predefined correct password

    if (username === correctUsername && password === correctPassword) {
        return true;  // login is valid
    } else {
        return false;  // invalid login
    }
}

const enteredUsername = "user123";  // example user input
const enteredPassword = "pass123";  // example user input

if (validateLogin(enteredUsername, enteredPassword)) {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password.");
}




function isValidUsername(username) {
    return username.length >= 3 && username.length <= 15;
}
const username = "user123";
console.log(isValidUsername(username));  // true or false


function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(username);
}
const username = "user_123";  // false, as "_" is not allowed
console.log(isValidUsername(username));  // false


function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9._]+$/;
    return regex.test(username);
}
const username = "user.name_123";  // true, as it allows underscores and dots
console.log(isValidUsername(username));  // true


function isValidUsername(username) {
    const regex = /^(?!.*[._]{2})[a-zA-Z0-9._]+$/;
    return regex.test(username);
}
const username = "user..name";  // false, due to consecutive dots
console.log(isValidUsername(username));  // false


function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9][a-zA-Z0-9._]*[a-zA-Z0-9]$/;
    return regex.test(username);
}
const username = "_username";  // false, starts with "_"
console.log(isValidUsername(username));  // false

const validUsername = "user.name123";  // true
console.log(isValidUsername(validUsername));  // true

