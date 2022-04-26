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
    this.#formatNumber(transaction);
    if (transaction[0] === 'deposit') {
      transaction.splice(0, 4, `${transaction[1]} || ${transaction[2]} || || ${transaction[3]}`);
    } if (transaction[0] === 'withdrawal') {
      transaction.splice(0, 4, `${transaction[1]} || || ${transaction[2]} || ${transaction[3]}`);
    }
  }

  #formatNumber(transaction) {
    transaction[2] = Number(transaction[2]).toFixed(2);
    transaction[3] = Number(transaction[3]).toFixed(2);
  }
}

module.exports = Statement;
