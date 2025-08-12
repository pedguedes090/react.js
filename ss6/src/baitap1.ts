abstract class Shape {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    abstract getSize(): void;
}
class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getSize(): void {
        console.log(`Chiều rộng: ${this.width}`);
        console.log(`Chiều cao: ${this.height}`);
    }
}

const rect = new Rectangle("Hình chữ nhật", 5, 3);
console.log("Tên hình:", rect.getName());
rect.getSize();
