"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "john";
let lastName = "doe";
function capitalizeFirstLetter(str) {
    if (!str) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
firstName = capitalizeFirstLetter(firstName);
lastName = capitalizeFirstLetter(lastName);
let fullName = firstName + " " + lastName;
console.log(fullName);
