"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee1 {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.company = company;
        this.name = name;
        this.phone = phone;
    }
    printInfo() {
        console.log("Tên nhân viên: ", this.name);
        console.log("Tên công ty: ", this.company);
        console.log("Số điện thoại: ", this.phone);
    }
}
const emp = new Employee1("Nguyễn Văn A", "Rikkei", "0123456789");
console.log(emp.printInfo());
