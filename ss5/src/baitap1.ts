class Vehicle {
    public name: string;
    public year: number;
    public company: string;
    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
const vehicle1 = new Vehicle("A", 2000, "Royal")
const vehicle2 = new Vehicle("B", 2000, "Honda")

console.log(`thông tin xe thứ nhất
Tên: ${vehicle1.name}
Năm sx: ${vehicle1.year}
Hãng sx: ${vehicle1.company}`);
console.log(`thông tin xe thứ hai
Tên: ${vehicle2.name}
Năm sx: ${vehicle2.year}
Hãng sx: ${vehicle2.company}`);

