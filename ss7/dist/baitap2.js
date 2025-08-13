"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        if (typeof this.speed === "number") {
            this.speed -= 10;
        }
    }
    speedUp() {
        if (typeof this.speed === "number") {
            this.speed += 10;
        }
    }
    showSpeed() {
        console.log(`Speed: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`ID: ${this.id}`);
        console.log(`Gear: ${this.gear}`);
    }
}
