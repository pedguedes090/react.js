"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle2 {
    name;
    year;
    company;
    id;
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
}
const vhicle = new Vehicle2("Ô tô", 2004, "VFast", 1);
console.log(vhicle.name);
// console.log(vhicle.year); báo lỗi nhưng vẫn in ra đc
// console.log(vhicle.company); báo lỗi nhưng vẫn in ra đc
console.log(vhicle.id);
