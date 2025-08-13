"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
class cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Meow meo");
    }
    printName() {
        console.log(`Cat's name: ${this.name}`);
    }
}
class dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Gâu gâu");
    }
    printName() {
        console.log(`Dog's name: ${this.name}`);
    }
}
