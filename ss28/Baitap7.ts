function myForEach<T>(arr: T[], callback: (currentValue: T, index: number, array: T[]) => void): void {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i] as T, i, arr);
    }
}

const handle = <T>(currentValue: T, i: number, arr: T[]) => {
    console.log(`Vi tri:${i}| Gia tri:${currentValue} | arr:${arr}`);
};

myForEach([1, 2, 3, 4, 5, 6], handle);