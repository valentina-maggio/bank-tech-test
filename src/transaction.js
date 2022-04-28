const moment = require('moment');

class Transaction {
  constructor(type, amount, balance, date = moment().format('DD/MM/YYYY')) {
    this.type = type;
    this.amount = amount;
    this.balance = balance;
    this.date = date;
    Object.freeze(this);
  }
}

module.exports = Transaction;
