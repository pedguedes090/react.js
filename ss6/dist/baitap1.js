"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract class Shape
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    // Lấy tên hình
    getName() {
        return this.name;
    }
}
// Lớp Rectangle kế thừa Shape
class Rectangle extends Shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    // Ghi đè phương thức getSize
    getSize() {
        console.log(`Chiều rộng: ${this.width}`);
        console.log(`Chiều cao: ${this.height}`);
    }
}
// Sử dụng
const rect = new Rectangle("Hình chữ nhật", 5, 3);
console.log("Tên hình:", rect.getName());
rect.getSize();
