class BankAccount {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount, date = Date.now()) {
    this.balance += amount;
  }
}

module.exports = BankAccount;
