type callback = (number: number) => void
const displayNumbers = (num: number, callback: callback) => {
    setInterval(() => {
        callback(num);
        num++;
    }, 1000)
};

const number = (num: number) => {
    console.log(`so thu tu : `, num);
};

displayNumbers(1, number);