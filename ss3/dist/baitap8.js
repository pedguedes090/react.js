"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseNum(val) {
    let num = Number(val);
    return isNaN(num) ? null : num;
}
function plus(a, b) {
    let A = parseNum(a);
    let B = parseNum(b);
    if (A === null || B === null)
        return "khong hop le";
    return A + B;
}
function sub(a, b) {
    let A = parseNum(a);
    let B = parseNum(b);
    if (A === null || B === null)
        return "khong hop le";
    return A - B;
}
function mul(a, b) {
    let A = parseNum(a);
    let B = parseNum(b);
    if (A === null || B === null)
        return "khong hop le";
    return A * B;
}
function div(a, b) {
    let A = parseNum(a);
    let B = parseNum(b);
    if (A === null || B === null)
        return "khong hop le";
    return A / B;
}
console.log(plus("23", 4));
console.log(sub('20', '21'));
console.log(mul(12, 43));
console.log(div(520, 4));
