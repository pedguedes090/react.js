"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processInput(input) {
    if (typeof input === 'string') {
        if (!isNaN(Number(input))) {
            let result = Number(input) * Number(input);
            return result;
        }
        else {
            let strChar = input.split('');
            let str = strChar.filter(val => {
                let c = val.charCodeAt(0);
                return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
            });
            let num = str.length;
            return `${num} ky tu chu cai`;
        }
    }
    else if (typeof input === 'number') {
        let check = 0;
        for (let i = 1; i <= input / 2; i++) {
            if (input % i == 0) {
                check++;
            }
        }
        if (check === 1) {
            return 'la so nguyen to';
        }
        else {
            return 'Khong phai so nguyen to';
        }
    }
    else if (typeof input === 'boolean') {
        if (input === true) {
            return 'Gia tri la true - Tien hanh xu ly';
        }
        else {
            return 'Gia tri la false - Dung xu ly';
        }
    }
    else {
        return 'Input khong hop le';
    }
}
console.log(processInput('abc123'));
console.log(processInput(13));
console.log(processInput(true));
