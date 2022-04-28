const Statement = require('../src/statement');

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

    const mockTransactionsList = [{
      type: 'deposit',
      amount: 2000,
      balance: 2000,
      date: '22/04/2022',
    },
    {
      type: 'withdrawal',
      amount: 500,
      balance: 1500,
      date: '24/04/2022',
    },
    ];

    expect(statement.printTransactions(mockTransactionsList)).toBe('24/04/2022 || || 500.00 || 1500.00\n'
    + '22/04/2022 || 2000.00 || || 2000.00');
  });

  it('returns an empty list in case of no transactions', () => {
    const statement = new Statement();
    const transactions = [];

    expect(statement.printTransactions(transactions)).toBe('');
  });

  it('returns the full document', () => {
    const statement = new Statement();

    const mockTransactionsList = [{
      type: 'deposit',
      amount: 150,
      balance: 150,
      date: '22/04/2022',
    },
    {
      type: 'deposit',
      amount: 200,
      balance: 350,
      date: '23/04/2022',
    },
    {
      type: 'withdrawal',
      amount: 50,
      balance: 300,
      date: '25/04/2022',
    },
    ];

    expect(statement.printDocument(mockTransactionsList)).toBe('date || credit || debit || balance\n'
    + '25/04/2022 || || 50.00 || 300.00\n'
    + '23/04/2022 || 200.00 || || 350.00\n'
    + '22/04/2022 || 150.00 || || 150.00');
  });
});
