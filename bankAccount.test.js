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
});
