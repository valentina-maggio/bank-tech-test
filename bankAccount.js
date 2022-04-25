const moment = require('moment');

class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount, date = moment().format('DD/MM/YYYY')) {
    this.balance += amount;
    this.transactions.push([amount, date]);
  }

  withdraw(amount, date = moment().format('DD/MM/YYYY')) {
    this.balance -= amount;
    this.transactions.push([amount, date]);
  }
}

module.exports = BankAccount;
