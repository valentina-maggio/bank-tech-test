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

    expect(statement.printTransactions(transactions)).toStrictEqual('25/04/2022 || || 50 || 300\n23/04/2022 || 200 || || 350\n22/04/2022 || 150 || || 150');
  });
});
