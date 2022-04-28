const moment = require('moment');

class Transaction {
  constructor(type, amount, balance, date = moment()) {
    this.type = type;
    this.amount = amount;
    this.balance = balance;
    this.date = date;
    Object.freeze(this);
  }
}

module.exports = Transaction;
