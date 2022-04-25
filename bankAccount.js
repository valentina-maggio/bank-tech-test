class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(amount);
  }
}

module.exports = BankAccount;
