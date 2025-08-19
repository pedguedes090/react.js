"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function withDefault(value) {
    if (value === undefined) {
        return "default";
    }
    return value;
}
console.log(withDefault());
console.log(withDefault(42));
console.log(withDefault(true));
