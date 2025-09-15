type CallBack = (n: number) => void;

const caculate = (a: number, b: number, callback: CallBack) => {
    let sum = a + b;
    callback(sum);
}
const callBackFnc = (n: number) => {
    console.log("ket qua la: " + n);
}
caculate(5, 6, callBackFnc);