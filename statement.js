class Statement {
  constructor() {
    this.statement = '';
    this.header = 'date || credit || debit || balance';
  }

  printHeader() {
    return this.header;
  }

  printTransactions(transactions) {
    transactions.forEach((transaction) => {
      this.#transactionFormatting(transaction);
    });
    this.statement = transactions.reverse().join('\n');
    return this.statement;
  }

  #transactionFormatting(transaction) {
    if (transaction[0] === 'deposit') {
      transaction.splice(0, 4, `${transaction[1]} || ${transaction[2]} || || ${transaction[3]}`);
    } if (transaction[0] === 'withdrawal') {
      transaction.splice(0, 4, `${transaction[1]} || || ${transaction[2]} || ${transaction[3]}`);
    }
  }
}

module.exports = Statement;
