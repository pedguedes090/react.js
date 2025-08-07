"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let score = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let total = score.reduce((sum, num) => sum + num, 0);
let avg = (total / score.length);
console.log("Điểm trung bình :" + avg.toFixed(2));
