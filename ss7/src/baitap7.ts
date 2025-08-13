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
class SavingsAccount extends Account {
    interestRate: number;
    protected balanceSavingsAccount: number;

    constructor(accountNumber: string, balance: number, history: string, status: string, interestRate: number, balanceSavingsAccount: number) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
        this.balanceSavingsAccount = balanceSavingsAccount;
    }

    withdraw(amount: number): void {
        if (this.status === 'active' && this.balance == 0 && this.balanceSavingsAccount >= amount) {
            this.balanceSavingsAccount -= amount;
            this.history.push(`Withdraw: ${amount}`);
            console.log("Rút tiền thành công");
        } else {
            console.log("Rút tiền thất bại");
        }
    }
}