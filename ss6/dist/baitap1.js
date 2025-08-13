"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Chiều rộng: ${this.width}`);
        console.log(`Chiều cao: ${this.height}`);
    }
}
const rect = new Rectangle("Hình chữ nhật", 5, 3);
console.log("Tên hình:", rect.getName());
rect.getSize();
