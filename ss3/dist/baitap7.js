"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Khai báo biến và gán giá trị chuỗi ban đầu
const str1 = "hello world";
let uniqueString = "";
for (const char of str1) {
    if (!uniqueString.includes(char)) {
        uniqueString += char;
    }
}
console.log(uniqueString);
const str2 = "banana";
let uniquestr2 = "";
for (const char of str2) {
    if (!uniquestr2.includes(char)) {
        uniquestr2 += char;
    }
}
console.log(uniquestr2);
