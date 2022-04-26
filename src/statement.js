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

  #transactionFormatting(transaction) {
    if (transaction[0] === 'deposit') {
      this.statement.push([`${transaction[1]} || ${transaction[2].toFixed(2)} || || ${transaction[3].toFixed(2)}`]);
    } if (transaction[0] === 'withdrawal') {
      this.statement.push([`${transaction[1]} || || ${transaction[2].toFixed(2)} || ${transaction[3].toFixed(2)}`]);
    }
  }
}

module.exports = Statement;
