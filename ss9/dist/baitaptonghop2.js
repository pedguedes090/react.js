"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    id;
    name;
    phone;
    license;
    constructor(id, name, phone, license) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.license = license;
    }
    getDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Phone: ${this.phone}, License: ${this.license}`);
    }
}
class Vehicle {
    vehicleId;
    brand;
    model;
    basePrice;
    status;
    constructor(vehicleId, brand, model, basePrice, status) {
        this.vehicleId = vehicleId;
        this.brand = brand;
        this.model = model;
        this.basePrice = basePrice;
        this.status = status;
    }
    updateStatus(status) {
        this.status = status;
    }
}
class Motorbike extends Vehicle {
    constructor(vehicleId, brand, model, basePrice, status, hasSidecar) {
        super(vehicleId, brand, model, basePrice, status);
    }
    calculateSurcharge(days) {
        if (days > 7) {
            return this.basePrice * days + 20000;
        }
        else {
            return this.basePrice * days;
        }
    }
}
class Car extends Vehicle {
    constructor(vehicleId, brand, model, basePrice, status) {
        super(vehicleId, brand, model, basePrice, status);
    }
    calculateSurcharge(days) {
        if (days > 7) {
            return this.basePrice * days + 30000;
        }
        else {
            return this.basePrice * days;
        }
    }
}
