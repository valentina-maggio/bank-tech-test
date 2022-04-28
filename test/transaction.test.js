const Transaction = require('../src/transaction');

let transaction;

beforeEach(() => {
  transaction = new Transaction('deposit', 2000, 2000, '28/04/2022');
});

describe('Transaction', () => {
  it('returns an instance of the TransactionType class', () => {
    expect(transaction).toBeInstanceOf(Transaction);
  });

  it('records the type of transaction', () => {
    expect(transaction.type).toBe('deposit');
  });

  it('records the amount of transaction', () => {
    expect(transaction.amount).toBe(2000);
  });

  it('records the balance of transaction', () => {
    expect(transaction.balance).toBe(2000);
  });

  it('records the date of transaction', () => {
    expect(transaction.date).toBe('28/04/2022');
  });
});
