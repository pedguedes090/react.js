"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    accountNumber;
    balance;
    history;
    status;
    constructor(accountNumber, balance, history, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (this.status === 'active') {
            this.balance += amount;
            this.history.push(`Deposit: ${amount}`);
        }
    }
    withdraw(amount) {
        if (this.status === 'active' && this.balance >= amount) {
            this.balance -= amount;
            this.history.push(`Withdraw: ${amount}`);
            console.log("Rút tiền thành công");
        }
        else {
            console.log("Rút tiền thất bại");
        }
    }
    showHistory() {
        console.log("Transaction History:");
        this.history.forEach(entry => console.log(entry));
    }
}
class SavingsAccount extends Account {
    interestRate;
    balanceSavingsAccount;
    constructor(accountNumber, balance, history, status, interestRate, balanceSavingsAccount) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
        this.balanceSavingsAccount = balanceSavingsAccount;
    }
    withdraw(amount) {
        if (this.status === 'active' && this.balance == 0 && this.balanceSavingsAccount >= amount) {
            this.balanceSavingsAccount -= amount;
            this.history.push(`Withdraw: ${amount}`);
            console.log("Rút tiền thành công");
        }
        else {
            console.log("Rút tiền thất bại");
        }
    }
}
