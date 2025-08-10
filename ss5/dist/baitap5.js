"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setWidth(newWidth) {
        this.width = newWidth;
    }
    setHeight(newHeight) {
        this.height = newHeight;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    dtich() {
        return this.width * this.height;
    }
    cvi() {
        return (2 * (this.width + this.height));
    }
}
const rectangle = new Rectangle(4, 5);
console.log("CHu vi: ", rectangle.cvi());
console.log("Diện tích: ", rectangle.dtich());
