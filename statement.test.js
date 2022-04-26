const Statement = require('./statement');

describe('Statement', () => {
  it('returns an instance of the Statement class', () => {
    const statement = new Statement();

    expect(statement).toBeInstanceOf(Statement);
  });

  it('returns the document header', () => {
    const statement = new Statement();

    expect(statement.printHeader()).toBe('date || credit || debit || balance');
  });

  it('returns a list of transactions', () => {
    const statement = new Statement();
    const transactions = [
      ['deposit', '22/04/2022', 150, 150],
      ['deposit', '23/04/2022', 200, 350],
      ['withdrawal', '25/04/2022', 50, 300]];

    expect(statement.printTransactions(transactions)).toBe('25/04/2022 || || 50.00 || 300.00\n23/04/2022 || 200.00 || || 350.00\n22/04/2022 || 150.00 || || 150.00');
  });

  it('returns an empty list in case of no transactions', () => {
    const statement = new Statement();
    const transactions = [];

    expect(statement.printTransactions(transactions)).toBe('');
  });
});
