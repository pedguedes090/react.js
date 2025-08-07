interface student{
    name: string;
    age: number;
    email: string
}
let st1: student = {
    name: 'john',
    age: 20,
    email:'john@gmail.com'
}
console.log(`Ten toi la ${st1.name}. Toi ${st1.age} va email cua toi la ${st1.email}`)