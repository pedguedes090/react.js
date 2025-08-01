let createUser = (name,age =18,role =`user`)=>{
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Role: ${role}`);
}
createUser("dev");
createUser("dev22", 20, "admin");