abstract class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeSound(): void;
    abstract printName(): void;
}
class cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeSound(): void {
        console.log("Meow meo");
    }
    printName(): void {
        console.log(`Cat's name: ${this.name}`);
    }
}
class dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeSound(): void {
        console.log("Gâu gâu");
    }
    printName(): void {
        console.log(`Dog's name: ${this.name}`);
    }
}
