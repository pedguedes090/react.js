const arr1 = [4,2,3];
const arr2 = [1,5,9];

console.log(`${[...arr1, ...arr2].sort((a, b) => a - b)}`);