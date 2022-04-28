const Statement = require('./statement');
const Transaction = require('./transaction');

class BankAccount {
  #statement;

  #errMsg;

  #transaction;

  constructor(transaction = Transaction, statement = new Statement()) {
    this.balance = 0;
    this.transactions = [];
    this.#transaction = transaction;
    this.#statement = statement;
    this.#errMsg = 'Invalid input, please enter a positive number';
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.#errorMessage(amount);
    this.balance += amount;
    this.transactions.push(new this.#transaction('deposit', amount, this.balance));
    return this.balance;
  }

  withdraw(amount) {
    this.#errorMessage(amount);
    this.#checkOverdraft(amount);
    this.balance -= amount;
    this.transactions.push(new this.#transaction('withdrawal', amount, this.balance));
    return this.balance;
  }

  viewStatement() {
    console.log(this.#statement.printDocument(this.transactions));
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
