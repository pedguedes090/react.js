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
class CheckingAccount extends Account {
    overdraftLimit;
    constructor(accountNumber, balance, history, status, overdraftLimit) {
        super(accountNumber, balance, history, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (this.status === 'active' && (this.balance + this.overdraftLimit) >= amount) {
            this.balance -= amount;
            this.history.push(`Withdraw: ${amount}`);
            console.log("Rút tiền thành công");
        }
        else {
            console.log("Rút tiền thất bại");
        }
    }
}
