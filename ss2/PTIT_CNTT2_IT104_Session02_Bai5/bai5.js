let phoneBook = [];
let addContact=(name,phone,email)=>{
    let contact = {
        name: name,
        phone: phone,
        email: email
    };
    phoneBook.push(contact);
    
}
let displayContacts=()=>{
    if(phoneBook.length == 0){
        cpnssole.log("không có liên hệ nào");
    }
    phoneBook.forEach(contact => {
        console.log(`Tên: ${contact.name}
Số điện thoại: ${contact.phone}
Email: ${contact.email}`)
    });
}

addContact("Nguyen Van A", "0123456789", "Nguyen@gmail.com");
addContact("Nguyen Van B", "0123456789", "Nguyen@gmail.com");
displayContacts();