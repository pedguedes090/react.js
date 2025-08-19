class Customer {
    private id: number;
    private name: string;
    private phone: string;
    private license: string;

    constructor(id: number, name: string, phone: string, license: string) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.license = license;
    }
    getDetails(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Phone: ${this.phone}, License: ${this.license}`);
    }

}
abstract class Vehicle {
    private vehicleId: number;
    brand: string;
    model: string;
    basePrice: number;
    status: string;

    constructor(vehicleId: number, brand: string, model: string, basePrice: number, status: string) {
        this.vehicleId = vehicleId;
        this.brand = brand;
        this.model = model;
        this.basePrice = basePrice;
        this.status = status;
    }
    updateStatus(status: string): void {
        this.status = status;
    }
    abstract calculateSurcharge(days: number): number;

}
class Motorbike extends Vehicle {
    constructor(vehicleId: number, brand: string, model: string, basePrice: number, status: string, hasSidecar: boolean) {
        super(vehicleId, brand, model, basePrice, status);
    }
    calculateSurcharge(days: number): number {
        if (days > 7) {
            return this.basePrice * days + 20000;
        }else{
            return this.basePrice * days;
        }
    }
}
class Car extends Vehicle {
    constructor(vehicleId: number, brand: string, model: string, basePrice: number, status: string) {
        super(vehicleId, brand, model, basePrice, status);
    }
    calculateSurcharge(days: number): number {
        if (days > 7) {
            return this.basePrice * days + 30000;
        } else {
            return this.basePrice * days;
        }
    }
}
