type CallBack = (n: number) => void;

const delayedCallback = (callback: CallBack, delay: number) => {
    setTimeout(() => {
        callback(delay);
    }, delay);
}
const callBackFnc = () => {
    console.log("Delay xong sau 2000ms");
}

delayedCallback(callBackFnc, 2000);