type callback = (str: string) => void;
const checkCondition = (value: boolean, callback: callback) => {
    const check = () => {
        if (value) {
            callback("Dieu kien tra ve: true");
        } else {
            callback("Dieu kien tra ve: false");
        }

        setTimeout(check, 1000);
    };
    check();
};
const callbackfnc = (str: string) => {
    console.log(str);
};
checkCondition(false, callbackfnc);