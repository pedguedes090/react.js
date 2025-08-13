"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }
    calculateSalary() {
        return 10_000_000;
    }
}
class ParttimeJob extends Job {
    workingHour;
    constructor(workingHour) {
        super("Parttime");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30_000 * this.workingHour;
    }
}
