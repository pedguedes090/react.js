type callback = (number: number) => void
const processArray = (array: number[], callback: callback) => {
    array.forEach((num, index) => {
        setTimeout(() => {
            callback(num)
        }, (index + 1) * 1000)
    })
}
const callbackfnc = (number: number) => {
    console.log('so thu :', number)
}
processArray([1, 2, 3, 4, 5], callbackfnc)