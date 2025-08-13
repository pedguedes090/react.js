class Vehicle {
    name:string;
    speed:number;
    id:number|string;
    constructor(name:string,speed:number,id:number|string){
        this.name=name;
        this.speed=speed;
        this.id=id;
    }
    slowDown(){
        if (typeof this.speed === "number") {
            this.speed -= 10;
        }
    }
    speedUp(){
        if (typeof this.speed === "number") {
            this.speed += 10;
        }
    }
    showSpeed(){
        console.log(`Speed: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    gear: number;
    constructor(name: string, speed: number, id: number | string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    showInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`ID: ${this.id}`);
        console.log(`Gear: ${this.gear}`);
    }

}