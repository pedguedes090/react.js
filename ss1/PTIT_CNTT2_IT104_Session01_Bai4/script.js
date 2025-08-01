let checkPatity = (a) => {
    if(isNaN(a)){
        console.log("Khong phai la so");
    }else if(a % 2 === 0){
        console.log("So chan");
    }else{
        console.log("So le");
    }
};

checkPatity(4);
checkPatity(5);
checkPatity("abc");