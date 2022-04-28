const moment = require('moment');
const Statement = require('./statement');

class BankAccount {
  #statement;

  #errMsg;

  constructor(statement = new Statement()) {
    this.balance = 0;
    this.transactions = [];
    this.#statement = statement;
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
    this.#checkOverdraft(amount);
    this.balance -= amount;
    this.transactions.push(['withdrawal', date, amount, this.balance]);
  }

  viewStatement() {
    console.log(this.#statement.printHeader());
    console.log(this.#statement.printTransactions(this.transactions));
  }

  #errorMessage(amount) {
    if (amount <= 0 || typeof amount !== 'number') {
      throw new Error(this.#errMsg);
    }
  }

  #checkOverdraft(amount) {
    if (this.balance < 0) {
      throw new Error('Your balance is negative, please make a deposit first');
    }
    if (amount > this.balance) {
      console.log('Your balance is negative. You are now using your overdraft allowance');
    }
  }
}

module.exports = BankAccount;
