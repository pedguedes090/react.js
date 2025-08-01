const sum = (...agrs) => {
     return agrs.map(mang => mang.reduce((tong, phanTu) => tong + phanTu, 0));
};
console.log(sum([1, 2, 3], [4, 5, 6]));
