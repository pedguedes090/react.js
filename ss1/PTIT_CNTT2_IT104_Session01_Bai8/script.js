function addArray(arr1, arr2,index) {
    if(index<0||index> arr1.length+ arr2.length){
       return;
    }
    arr1.splice(index, 0, ...arr2);
    return arr1;
}

console.log(addArray([1, 2, 3], [4, 5, 6], 2));