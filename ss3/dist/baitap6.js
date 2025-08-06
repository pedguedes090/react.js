"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Khai báo biến với kiểu dữ liệu cụ thể
let num1 = 20;
let num2 = 5;
let num3;
let num4 = "10";
let num5 = true;
num3 = num1 + num2;
console.log(`Phép cộng: ${num1} + ${num2} = ${num3}`); // Kết quả: 20 + 5 = 25
num3 = num1 - num2;
console.log(`Phép trừ: ${num1} - ${num2} = ${num3}`); // Kết quả: 20 - 5 = 15
num3 = num1 * num2;
console.log(`Phép nhân: ${num1} * ${num2} = ${num3}`); // Kết quả: 20 * 5 = 100
num3 = num1 / num2;
console.log(`Phép chia: ${num1} / ${num2} = ${num3}`); // Kết quả: 20 / 5 = 4
let result = num4 + num5;
console.log(`Kết quả của ${num4} + ${num5} là: ${result}`); // Kết quả: "10" + true = "10true"
