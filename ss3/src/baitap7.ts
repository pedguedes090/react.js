// Khai báo biến và gán giá trị chuỗi ban đầu
const str1: string = "hello world";
let uniqueString: string = "";

for (const char of str1) {
  if (!uniqueString.includes(char)) {
    uniqueString += char;
  }
}

console.log(uniqueString);

const str2: string = "banana";
let uniquestr2: string = "";
for (const char of str2) {
  if (!uniquestr2.includes(char)) {
    uniquestr2 += char;
  }
}
console.log(uniquestr2); 