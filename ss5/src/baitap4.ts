class Vehicle2 {
    name: string;
    protected year: number;
    private company: string;
    readonly id: number;
    constructor(name: string, year: number, company: string, id: number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
}
const vhicle =new Vehicle2("Ô tô",2004,"VFast", 1);
console.log(vhicle.name);
// console.log(vhicle.year); báo lỗi nhưng vẫn in ra đc
// console.log(vhicle.company); báo lỗi nhưng vẫn in ra đc
console.log(vhicle.id);



