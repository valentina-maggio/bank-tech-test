const moment = require('moment');
const Statement = require('./statement');

class BankAccount {
  #errMsg;

  constructor() {
    this.balance = 0;
    this.transactions = [];
    this.statement = new Statement();
    this.#errMsg = 'Invalid input, please enter a positive number';
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount, date = moment().format('DD/MM/YYYY')) {
    this.#errorMessage(amount);
    this.balance += amount;
    this.transactions.push(['deposit', date, amount, this.balance]);
  }

  withdraw(amount, date = moment().format('DD/MM/YYYY')) {
    this.#errorMessage(amount);
    this.balance -= amount;
    this.transactions.push(['withdrawal', date, amount, this.balance]);
  }

  viewStatement() {
    console.log(this.statement.printHeader());
    console.log(this.statement.printTransactions(this.transactions));
  }

  #errorMessage(amount) {
    if (amount <= 0 || typeof amount !== 'number') {
      throw new Error(this.#errMsg);
    }
  }
}

module.exports = BankAccount;
