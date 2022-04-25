const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  it('returns an instance of the BankAccount class', () => {
    const account = new BankAccount();

    expect(account).toBeInstanceOf(BankAccount);
  });

  it('has an initial balance of 0', () => {
    const account = new BankAccount();

    expect(account.getBalance()).toBe(0);
  });

  it('adds money to the bank account', () => {
    const account = new BankAccount();
    account.deposit(50);

    expect(account.getBalance()).toBe(50);
  });
});
