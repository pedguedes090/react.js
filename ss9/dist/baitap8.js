"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createObject(keys, values) {
    const result = {};
    const len = Math.min(keys.length, values.length);
    for (let i = 0; i < len; i++) {
        const key = keys[i];
        const value = values[i];
        result[key] = value;
    }
    return result;
}
const keys = ['name', 'age', 'email'];
const values = ['Alice', 25, 'alice@example.com'];
const obj = createObject(keys, values);
console.log(obj);
