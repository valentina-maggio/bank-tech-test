const moment = require('moment');

class BankAccount {
  #errMsg;

  constructor() {
    this.balance = 0;
    this.transactions = [];
    this.#errMsg = 'Invalid input, please enter a positive number';
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount, date = moment().format('DD/MM/YYYY')) {
    this.#errorMessage(amount);
    this.balance += amount;
    this.transactions.push([date, amount, this.balance]);
  }

  withdraw(amount, date = moment().format('DD/MM/YYYY')) {
    this.#errorMessage(amount);
    this.balance -= amount;
    this.transactions.push([date, amount, this.balance]);
  }

  #errorMessage(amount) {
    if (amount <= 0 || typeof amount !== 'number') {
      throw new Error(this.#errMsg);
    }
  }
}

module.exports = BankAccount;
