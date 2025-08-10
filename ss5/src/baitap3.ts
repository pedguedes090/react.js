class Employee1 {
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string) {
        this.company = company;
        this.name = name;
        this.phone = phone;
    }
    printInfo(){
        console.log("Tên nhân viên: ",this.name);
        console.log("Tên công ty: ",this.company);
        console.log("Số điện thoại: ",this.phone);
    }
}

const emp = new Employee1 ("Nguyễn Văn A", "Rikkei", "0123456789")
console.log(emp.printInfo());

