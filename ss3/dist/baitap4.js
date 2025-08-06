"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let strNumber = "2";
let number = 2;
if (strNumber == number) {
    console.log("strNumber == number là true"); // Kết quả: true
    // Giải thích: Toán tử == chỉ so sánh giá trị, nó sẽ cố gắng chuyển đổi kiểu dữ liệu của một trong hai biến để so sánh. Trong trường hợp này, string "2" được chuyển đổi thành number 2, và sau đó so sánh 2 == 2, kết quả là true.
}
else {
    console.log("strNumber == number là false");
}
if (strNumber === number) {
    console.log("strNumber === number là true");
}
else {
    console.log("strNumber === number là false"); // Kết quả: false
    // Giải thích: Toán tử === so sánh cả giá trị và kiểu dữ liệu. Vì strNumber là string và number là number, mặc dù giá trị của chúng đều là 2, nhưng kiểu dữ liệu khác nhau, nên kết quả so sánh là false.
}
