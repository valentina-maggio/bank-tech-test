class Statement {
  constructor() {
    this.statement = [];
    this.header = 'date || credit || debit || balance';
  }

  printHeader() {
    return this.header;
  }

  printTransactions(transactions) {
    transactions.forEach((transaction) => {
      this.#transactionFormatting(transaction);
    });
    return this.statement.reverse().join('\n');
  }

  printDocument(transactions) {
    const document = `${this.printHeader()}\n`
    + `${this.printTransactions(transactions)}`;
    return document;
  }

  #transactionFormatting(transaction) {
    if (transaction.type === 'deposit') {
      this.statement.push([`${transaction.date} || ${transaction.amount.toFixed(2)} || || ${transaction.balance.toFixed(2)}`]);
    } if (transaction.type === 'withdrawal') {
      this.statement.push([`${transaction.date} || || ${transaction.amount.toFixed(2)} || ${transaction.balance.toFixed(2)}`]);
    }
  }
}

module.exports = Statement;
