let arr = [1, 2, 3, 4, 5];

let checkElement = (arr,number)=>{
    let count = 0;
    for (const element of arr) {
        if(element === number) {
            count++;
        }
    }
    if(count == 0) {
        return false;
    }
    return true;

}
console.log(checkElement(arr, 3));
console.log(checkElement(arr, 6));
