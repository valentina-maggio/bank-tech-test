const moment = require('moment');

class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
    this.errorMsg = '';
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount, date = moment().format('DD/MM/YYYY')) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push([amount, date]);
    } else {
      this.errorMessage();
    }
  }

  withdraw(amount, date = moment().format('DD/MM/YYYY')) {
    if (amount > 0) {
      this.balance -= amount;
      this.transactions.push([amount, date]);
    } else {
      this.errorMessage();
    }
  }

  errorMessage() {
    this.errorMsg = 'Invalid input, please enter a positive amount';
    console.log(this.errorMsg);
  }
}

module.exports = BankAccount;
