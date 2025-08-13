class Account {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: string, balance: number, history: string, status: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount: number): void {
        if (this.status === 'active') {
            this.balance += amount;
            this.history.push(`Deposit: ${amount}`);
        }
    }
    withdraw(amount: number): void {
        if (this.status === 'active' && this.balance >= amount) {
            this.balance -= amount;
            this.history.push(`Withdraw: ${amount}`);
            console.log("Rút tiền thành công");
        } else {
            console.log("Rút tiền thất bại");
        }
    }
    showHistory(): void {
        console.log("Transaction History:");
        this.history.forEach(entry => console.log(entry));
    }
}
class CheckingAccount extends Account {
    overdraftLimit: number;

    constructor(accountNumber: string, balance: number, history: string, status: string, overdraftLimit: number) {
        super(accountNumber, balance, history, status);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        if (this.status === 'active' && (this.balance + this.overdraftLimit) >= amount) {
            this.balance -= amount;
            this.history.push(`Withdraw: ${amount}`);
            console.log("Rút tiền thành công");
        } else {
            console.log("Rút tiền thất bại");
        }
    }
}