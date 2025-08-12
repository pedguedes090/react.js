
abstract class Job {
    type: string;

    constructor(type: string) {
        this.type = type;
    }
    printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }

    abstract calculateSalary(): number;
}

class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }

    calculateSalary(): number {
        return 10_000_000; 
    }
}

class ParttimeJob extends Job {
    workingHour: number;

    constructor(workingHour: number) {
        super("Parttime");
        this.workingHour = workingHour;
    }

    calculateSalary(): number {
        return 30_000 * this.workingHour;
    }
}
