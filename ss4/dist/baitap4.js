"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function check(temp) {
    if (typeof temp === 'string') {
        return `${temp.length} Ký tự `;
    }
    else if (typeof temp === 'number') {
        if (temp % 2 == 0) {
            return `Đây là số chẵn`;
        }
        else {
            return `Đây là số lẻ`;
        }
    }
    else {
        return `Dữ liệu không hợp lệ `;
    }
}
console.log(check('3120'));
console.log(check('grteg'));
