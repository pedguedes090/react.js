"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mergeObjects(a, b) {
    return { ...a, ...b };
}
let person = { name: "Join" };
let job = { role: "Developer" };
console.log(mergeObjects(person, job));
