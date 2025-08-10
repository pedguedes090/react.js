"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
const student1 = new Student(1, 18, "a@gmail.com");
const student2 = new Student(2, 17, "c@gmail.com");
const student3 = new Student(3, 19, "b@gmail.com");
let arr = [student1, student2, student3];
for (const el of arr) {
    console.log(`Thông tin sv`, el);
}
