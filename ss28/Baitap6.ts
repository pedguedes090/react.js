type Callback = () => void;
function task1(next: Callback): void {
    setTimeout(() => {
        console.log("Task 1 da duoc thuc thi");
        next();
    }, 1000);
}
function task2(next: Callback): void {
    setTimeout(() => {
        console.log("Task 2 da duoc thuc thi");
        next();
    }, 1500);
}
function task3(next: Callback): void {
    setTimeout(() => {
        console.log("Task 3 da duoc thuc thi");
        console.log("Hoan thanh Task 3");
        next();
    }, 2000);
}
function runTasks(): void {
    task1(() => {
        task2(() => {
            task3(() => {
            });
        });
    });
}
runTasks();