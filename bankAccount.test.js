const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  it('returns an instance of the BankAccount class', () => {
    const account = new BankAccount();

    expect(account).toBeInstanceOf(BankAccount);
  });
});
